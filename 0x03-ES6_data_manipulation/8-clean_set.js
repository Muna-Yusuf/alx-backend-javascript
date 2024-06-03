export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  let re = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      re += `${value.slice(startString.length)}-`;
    }
  }
  if (re) {
    re = re.slice(0, -1);
  }

  return re;
}
