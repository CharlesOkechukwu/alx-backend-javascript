export default function createIteratorObject(report) {
  let employee = [];
  for (const list of Object.values(report.allEmployees)) {
    employee = [...employee, ...list];
  }
  return employee;
}
