import { promises as fs } from 'fs';
import { join } from 'path';

const create = async () => {
    const content = 'I am fresh and young';
    const filePath = join('src/fs/files', 'fresh.txt');
        try {
            await fs.access(filePath);
            console.error('error: FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }
        }
        await fs.writeFile(filePath, content);
};

await create();
