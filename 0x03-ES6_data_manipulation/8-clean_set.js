export default function cleanSet(_set, startString) {
  if (typeof _set !== 'object' || startString.length === 0 || typeof startString !== 'string') { return ''; }

  const strSet = [];
  [..._set].forEach((x) => {
    if (x && x.indexOf(startString) === 0) strSet.push(x.replace(startString, ''));
  });
  return strSet.join('-');
}
