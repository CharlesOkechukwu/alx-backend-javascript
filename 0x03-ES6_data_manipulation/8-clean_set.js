export default function cleanSet(set, startString) {
  if ((set instanceof Set) && (typeof startString === 'string')) {
    const arr = [];
    for (const val of set.values()) {
      if (val.startsWith(startString) && typeof val === 'string') {
        const subStr = val.substring(startString.length);
        if (subStr && subStr !== val) {
          arr.push(subStr);
        }
      }
    }
    return arr.join('-');
  }
  return '';
}
