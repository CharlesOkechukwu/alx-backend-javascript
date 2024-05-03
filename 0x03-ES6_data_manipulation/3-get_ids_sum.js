export default function getStudentIdsSum(objArray) {
  return objArray.reduce((old, curr) => old + curr.id, 0);
}
