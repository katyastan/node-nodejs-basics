import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
  const numOfCores = cpus().length; 
  const fibonacciCalculations = (n) =>
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
  const workers = await Promise.all(Array.from({ length: numOfCores }, (_, i) => fibonacciCalculations(10 + i)));
  console.log(workers);
};

await performCalculations();
