import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGunzip } from 'zlib';


const decompress = async () => {
    const filePath = join('src/zip/files', 'archive.gz');
    const fileStream = createReadStream(filePath);
    const gunzipStream = createGunzip();
    const writeGzipStream = createWriteStream(join('src/zip/files', 'fileToCompress.txt'));
    fileStream.pipe(gunzipStream).pipe(writeGzipStream);
    console.log('File decompressed successfully');
};

await decompress();
