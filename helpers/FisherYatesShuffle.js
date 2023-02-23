/**
 * Fisher-Yates shuffle an array
 * https://bost.ocks.org/mike/shuffle/compare.html
 * @param {Array} array the array to shuffle
 */
export function FisherYatesShuffle(array) {
  const newArray = [...array];
  let m = newArray.length;
  let t;
  let i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = newArray[m];
    newArray[m] = newArray[i];
    newArray[i] = t;
  }
  return newArray;
}
