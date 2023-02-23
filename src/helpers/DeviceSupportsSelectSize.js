export function deviceSupportsSelectSize() {
  const select1 = document.createElement('select');
  select1.size = 1;
  document.body.appendChild(select1);
  const select2 = document.createElement('select');
  select2.size = 2;
  document.body.appendChild(select2);
  let supportsSelectSize = select1?.offsetHeight !== select2?.offsetHeight;
  select1.remove();
  select2.remove();
  return supportsSelectSize;
}
