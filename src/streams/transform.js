import { Transform } from 'stream';

const transform = async () => {

    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    });
    
    console.log('Enter text to reverse... Exit: Ctrl+C');
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
