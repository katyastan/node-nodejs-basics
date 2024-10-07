import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
  const numOfCores = cpus().length; 
  const startNumber = 10;
  const fbService = (n) =>
    new Promise((resolve) => {
      const worker = new Worker( './src/wt/worker.js', { workerData: n });
      worker.postMessage(n);
      worker.on('message', (data) => {
        resolve({
          status: 'resolved',
          data: data,
        });
      });
      worker.on('error', (error) => {
        resolve({
          status: 'error',
          data: null,
          error: error.message,
        });
      });
    });
  const workerResults = await Promise.all(Array.from({ length: numOfCores }, (_, i) => fbService(startNumber + i)));
  console.log(workerResults);
};

await performCalculations();
