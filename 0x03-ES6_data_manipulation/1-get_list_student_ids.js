export default function getListStudentIds(objArray) {
  if (objArray instanceof Array) {
    return objArray.map((obj) => obj.id);
  }
  return [];
}
