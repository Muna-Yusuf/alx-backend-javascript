const fs = require('fs');

module.exports = function countStudents(path) {
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

      lines.forEach((line) => {
        const list = line.split(',');
        const field = list[idxFd];
        const firstname = list[idxFn];

        fields[field] = (fields[field] || 0) + 1;
        students[field] = students[field] ? `${students[field]}, ${firstname}` : firstname;
      });

      console.log(`Number of students: ${lines.length}`);
      for (const [field, count] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${count}. List: ${students[field]}`);
      }

      resolve();
    });
  });
};
