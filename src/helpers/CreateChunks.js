export default function CreateChunks({ file, chunkSize = 5_000_000 } = {}) {
  const chunks = [];
  const chunkCount = Math.ceil(file.size / chunkSize);

  for (let i = 0; i < chunkCount; i++) {
    chunks.push(
      new File(
        [
          file.slice(
            i * chunkSize,
            Math.min(i * chunkSize + chunkSize, file.size),
            'application/octet-stream'
          ),
        ],
        file.name
      )
    );
  }

  return chunks;
}
