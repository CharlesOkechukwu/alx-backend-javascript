const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
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

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const database = process.argv.length > 2 ? process.argv[2] : '';
    try {
      const record = await countStudents(database);
      res.write(record);
    } catch (err) {
      res.write(err.message);
    }
  }
  res.end();
});

app.listen(port, hostname);

module.exports = app;
