/**
 * Check whether the user's device has hover support
 * @returns {Boolean} Whether the device has hover support
 */
export function deviceHasHover() {
  return window.matchMedia('(any-hover: hover)').matches;
}
