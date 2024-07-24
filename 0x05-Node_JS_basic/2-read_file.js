const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
