const http = require('http');
const fs = require('fs').promises; // Using promises directly

/**
 * Reads the student database and returns a promise with student counts and lists.
 * @param {string} path - Path to the database file.
 * @returns {Promise<object>} - A promise that resolves to an object with student counts and lists.
 */
function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n').slice(1);
      const header = data.split('\n')[0].split(',');

      const idxFn = header.indexOf('firstname');
      const idxFd = header.indexOf('field');

      if (idxFn === -1 || idxFd === -1) {
        throw new Error('Invalid database format');
      }

      const fields = {};
      const students = {};

      lines.forEach((line) => {
        const [,, firstname, field] = line.split(',');

        fields[field] = (fields[field] || 0) + 1;
        students[field] = students[field] ? `${students[field]}, ${firstname}` : firstname;
      });

      const result = {
        numberStudents: `Number of students: ${lines.length}\n`,
        listStudents: Object.entries(fields).map(
          ([field, count]) => `Number of students in ${field}: ${count}. List: ${students[field]}`
        ),
      };

      return result;
    })
    .catch((err) => {
      throw new Error(`Cannot load the database: ${err.message}`);
    });
}

const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = parseInt(process.env.PORT, 10) || 1245;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.write(data.numberStudents);
        res.end(data.listStudents.join('\n'));
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(`Error: ${err.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
