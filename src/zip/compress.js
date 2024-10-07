import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGzip } from 'zlib';
const compress = async () => {
    const filePath = join('src/zip/files', 'fileToCompress.txt');
    const fileStream = createReadStream(filePath);
    const gzipStream = createGzip();
    const writeGzipStream = createWriteStream(join('src/zip/files', 'archive.gz'));
    fileStream.pipe(gzipStream).pipe(writeGzipStream);
    console.log('File compressed successfully');
};

await compress();
