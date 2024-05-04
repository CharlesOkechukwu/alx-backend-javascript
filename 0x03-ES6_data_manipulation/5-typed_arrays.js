export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new RangeError('Position outside range');
  }
  const buff = new DataView(new ArrayBuffer(length));
  buff.setInt8(position, value);
  return buff;
}
