export default function HumanFileSize(sizeInBytes) {
  const i = Math.floor(Math.log(sizeInBytes) / Math.log(1000));
  return (
    (sizeInBytes / Math.pow(1000, i)).toFixed(2) * 1 +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  );
}
