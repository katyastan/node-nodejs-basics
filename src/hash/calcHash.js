import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join } from 'path';

const calculateHash = async () => {
    const filePath = join('src/hash/files', 'fileToCalculateHashFor.txt');
    const fileStream = createReadStream(filePath);
    const hash = createHash('sha256');
    fileStream.pipe(hash);
    await new Promise((resolve, reject) => {
        fileStream.on('error', reject);
        fileStream.on('end', resolve);
    });
    console.log(`Hash is ${hash.digest('hex')}`);};

await calculateHash();
