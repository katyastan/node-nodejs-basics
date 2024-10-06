import { promises as fs } from 'fs';
import { join } from 'path';

const list = async () => {
    const filePath = join('src/fs/files');
    try {
        await fs.access(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
    const files = await fs.readdir(filePath);
    console.log(files);
};

await list();
