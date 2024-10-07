import { promises as fs } from 'fs';
import { join } from 'path';

const rename = async () => {
    const existingPath = join('src/fs/files', 'wrongFilename.txt');
    const destinationPath = join('src/fs/files', 'properFilename.md');
    try {
        await fs.access(existingPath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
    try {
        await fs.access(destinationPath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
    await fs.rename(existingPath, destinationPath);
    console.log('Renamed successfully');
};

await rename();
