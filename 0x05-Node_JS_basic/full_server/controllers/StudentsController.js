import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const path = process.argv.length > 2 ? process.argv[2] : '';
      const record = await readDatabase(path);
      const classes = Object.keys(record);
      classes.sort();
      response.statusCode = 200;
      response.write('This is the list of our students\n');
      for (const cls of classes) {
        response.write(`Number of students in ${cls}: ${record[cls].length}. List: ${record[cls].join(', ')}`);
        if (classes.indexOf(cls) !== classes.length - 1) {
          response.write('\n');
        }
      }
    } catch (err) {
      response.statusCode = 500;
      response.write(err.message);
    }
    response.end();
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (['CS', 'SWE'].indexOf(major.toUpperCase()) === -1) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      const path = process.argv.length > 2 ? process.argv[2] : '';
      try {
        const records = await readDatabase(path);
        response.statusCode = 200;
        response.write(`List: ${records[major.toUpperCase()].join(', ')}`);
      } catch (err) {
        response.statusCode = 500;
        response.write(err.message);
      }
      response.end();
    }
  }
}

export default StudentsController;
