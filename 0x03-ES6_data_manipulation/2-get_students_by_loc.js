export default function getStudentsByLocation(objArray, city) {
  if (objArray instanceof Array) {
    return objArray.filter((obj) => obj.location === city);
  }
  return [];
}
