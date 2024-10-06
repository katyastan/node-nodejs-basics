import { join } from 'path';
import { promises as fs } from 'fs';

const read = async () => {
    const filePath = join('src/fs/files', 'fileToRead.txt');
    try {
        await fs.access(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
    const content = await fs.readFile(filePath, 'utf8');
    console.log(content);
};

await read();
