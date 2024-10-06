import { promises as fs } from 'fs';
import { join } from 'path';


const copy = async () => {
    const src = join('src/fs/files');
    const dest = join('src/fs/files_copy');
    try {
        await fs.access(src);
        await fs.access(dest);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }
    await fs.mkdir(src, dest);
    console.log('Copied successfully');
};

await copy();
--