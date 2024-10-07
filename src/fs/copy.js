import { promises as fs } from 'fs';
import { join } from 'path';
import { cp } from 'fs/promises'; 

const copy = async () => {
    
    const existingPath = join('src/fs/files'); 
    const destinationPath = join('src/fs/files_copy'); 

    try {
        await fs.access(existingPath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed'); 
        }
        throw new Error('FS operation failed');
    }

    try {
        await fs.access(destinationPath);
        throw new Error('FS operation failed'); 
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw new Error('FS operation failed'); 
        }
    }

    await cp(existingPath, destinationPath, { recursive: true });
    console.log(`Copied successfully.`);
};

await copy();
