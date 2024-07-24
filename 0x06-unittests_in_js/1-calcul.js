function calculateNumber(type, a, b) {
  const aRound = Math.round(a);
  const bRound = Math.round(b);

  switch (type) {
    case 'SUBTRACT':
      return aRound - bRound;
    case 'DIVIDE':
      return bRound === 0 ? 'Error' : aRound / bRound;
    default:
      return aRound + bRound;
  }
}

module.exports = calculateNumber;
