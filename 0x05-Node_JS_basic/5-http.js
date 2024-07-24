const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const lines = data.split('\n').slice(1, -1);
      const header = data.split('\n')[0].split(',');

      const idxFn = header.indexOf('firstname');
      const idxFd = header.indexOf('field');

      const fields = {};
      const students = {};
      const all = {};

      lines.forEach((line) => {
        const list = line.split(',');
        const field = list[idxFd];
        const firstname = list[idxFn];

        fields[field] = (fields[field] || 0) + 1;
        students[field] = students[field] ? `${students[field]}, ${firstname}` : firstname;
      });

      all.numberStudents = `Number of students: ${lines.length}\n`;
      all.listStudents = Object.entries(fields).map(
        ([field, count]) => `Number of students in ${field}: ${count}. List: ${students[field]}`
      );

      resolve(all);
    });
  });
}

const hostname = '127.0.0.1';
const port = 1245;

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
        res.end(err.message);
      });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
