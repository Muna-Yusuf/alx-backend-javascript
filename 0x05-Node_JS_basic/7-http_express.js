const express = require('express');
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

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data.numberStudents);
      res.end(data.listStudents.join('\n'));
    })
    .catch((err) => {
      res.end(err.message);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
