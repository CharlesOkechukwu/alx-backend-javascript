export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const firstStudent: Student = {
  firstName: "Charles",
  lastName: "Okechukwu",
  age: 27,
  location: "Rivers, Nigeria",
};
const secondStudent: Student = {
  firstName: "Chris",
  lastName: "Spencer",
  age: 35,
  location: "Huston, USA",
};

const students: Array<Student> = [firstStudent, secondStudent];

// display table using javaScript
export const studentDisplay = (allStudents: Array<Student>): void => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const hrow = document.createElement('tr');
  hrow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  hrow.insertAdjacentHTML('beforeend', '<th>Location</th>');
  thead.insertAdjacentElement('beforeend', hrow);
  const tbody = document.createElement('tbody');

  for (const student of allStudents) {
    const row = document.createElement('tr');
    row.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    row.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tbody.insertAdjacentElement('beforeend', row);
  }
  table.insertAdjacentElement('beforeend', thead);
  table.insertAdjacentElement('beforeend', tbody);
  document.body.insertAdjacentElement('beforeend', table);
};

studentDisplay(students);
