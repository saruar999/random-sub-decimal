function getRandomInBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomPercentages(decimal = 1, n = 4) {
  /**
   * A simple method intended for splitting a certain decimal number
   * into n amount of random decimal values, when summing these values they
   * add up to the initial decimal value.
   */
  const values = [];

  for (let i = n; i >= 1; i--) {
    if (i === 1) {
      values.push(Math.floor(decimal * 100) / 100);
      break;
    }
    const min = 0.1;
    const max = decimal / i;
    const random = Math.floor(getRandomInBetween(min, max) * 100) / 100;
    decimal -= random;
    values.push(random);
  }
  return values;
}
