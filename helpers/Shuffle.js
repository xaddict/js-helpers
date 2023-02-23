/**
 * Really randomly shuffle an array
 * https://bost.ocks.org/mike/shuffle/compare.html
 * @param {Array} array the array to shuffle
 */
export function Shuffle(array) {
  const random = array.map(Math.random);
  array.sort(function (a, b) {
    return random[a] - random[b];
  });
}
