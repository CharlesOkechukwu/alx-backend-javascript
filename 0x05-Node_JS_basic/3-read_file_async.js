const fs = require('fs');

function countStudents(path) {
  const countPromise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const records = data.split('\n');
        const cs = [];
        const swe = [];
        for (let i = 0; i < records.length; i += 1) {
          if (records[i] !== null && records[i] !== '') {
            const student = records[i].split(',');
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
        resolve();
      }
    });
  });
  return countPromise;
}

module.exports = countStudents;
