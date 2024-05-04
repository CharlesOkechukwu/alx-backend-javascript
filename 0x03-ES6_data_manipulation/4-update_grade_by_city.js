export default function updateStudentGradeByCity(objArray, city, newGrades) {
  if (objArray instanceof Array) {
    const students = objArray.filter((obj) => obj.location === city);
    return students.map((s) => {
      const stGrade = newGrades.find((g) => g.studentId === s.id);
      s.grade = stGrade ? stGrade.grade : 'N/A'; /* eslint-disable-line no-param-reassign */
      return s;
    });
  }
  return [];
}
