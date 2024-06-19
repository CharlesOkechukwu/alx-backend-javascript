import fs from 'fs';

function readDatabase(path) {
  const countPromise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const records = data.split('\n');
        const students = {};
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
        students.CS = cs;
        students.SWE = swe;
        resolve(students);
      }
    });
  });
  return countPromise;
}

export default readDatabase;
