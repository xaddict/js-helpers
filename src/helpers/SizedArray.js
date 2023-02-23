/**
 * Create a prefilled array of size `size`, filled with `fill` characters.
 * @param {Number} size the size of the resulting array
 * @param {String} fill the character to fill the array with
 */
export function SizedArray(size = 0, fill) {
  return Array.from({ length: size }, (_v, k) => fill ?? k);
}
