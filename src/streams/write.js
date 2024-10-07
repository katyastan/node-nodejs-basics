import { createWriteStream } from 'fs';
import { join } from 'path';

const write = async () => {
    const filePath = join('src/streams/files', 'fileToWrite.txt');
    const fileStream = createWriteStream(filePath);
    console.log('Write something to the stream... Exit: Ctrl+C');
    process.stdin.pipe(fileStream);
    process.stdin.on('end', () => {
        console.log('Input stream closed.');
    });
};

await write();
