const fs = require('fs');

function countStudents(path) {
  let dbData;
  try {
    dbData = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const data = dbData.split('\n');
  const cs = [];
  const swe = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i] !== null && data[i] !== '') {
      const student = data[i].split(',');
      if (student[3] === 'CS') {
        cs.push(student[0]);
      }
      if (student[3] === 'SWE') {
        swe.push(student[0]);
      }
    }
  }
  console.log(`Number of students: ${cs.length + swe.length}`);
  console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
  console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
}

module.exports = countStudents;
