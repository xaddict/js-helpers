export default function numberBetween(min, max) {
  if (min === undefined) {
    throw new Error('min is undefined');
  }
  if (max === undefined) {
    throw new Error('max is undefined');
  }
  if (typeof min !== 'number') {
    throw new Error('min is not a number');
  }
  if (typeof max !== 'number') {
    throw new Error('max is not a number');
  }
  if (min > max) {
    throw new Error('min is bigger than max');
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}
