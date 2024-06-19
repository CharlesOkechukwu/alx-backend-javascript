const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;

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
        let output = `Number of students: ${cs.length + swe.length}\n`;
        output += `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`;
        output += `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
        resolve(output);
      }
    });
  });
  return countPromise;
}

app.get('/', (req, resp) => {
  resp.send('Hello Holberton School!');
});

app.get('/students', async (req, resp) => {
  resp.write('This is the list of our students\n');
  const database = process.argv.length > 2 ? process.argv[2] : '';
  try {
    const record = await countStudents(database);
    resp.write(record);
  } catch (err) {
    resp.write(err.message);
  }
  resp.end();
});

app.listen(port);

module.exports = app;
