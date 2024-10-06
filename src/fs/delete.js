import { join } from 'path';
import { promises as fs } from 'fs';

const remove = async () => {
    const filePath = join('src/fs/files', 'fileToRemove.txt');
    try {
        await fs.access(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
    await fs.unlink(filePath);
    console.log('Deleted successfully');
};

await remove();
