import { join } from 'path';
import { createReadStream } from 'fs';

const read = async () => {
    const filePath = join('src/streams/files', 'fileToRead.txt');
    const fileStream = createReadStream(filePath);
    fileStream.pipe(process.stdout);
} 

await read();
