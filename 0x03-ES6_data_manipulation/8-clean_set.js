export default function cleanSet(_set, startString) {
  if (!startString || typeof startString !== 'string' || typeof _set !== 'object') {
    return '';
  }
  let re = '';
  for (const value of _set) {
    if (value.startsWith(startString)) {
      re += `${value.slice(startString.length)}-`;
    }
  }
  if (re) {
    re = re.slice(0, -1);
  }

  return re;
}
