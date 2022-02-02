const { Worker, isMainThread, parentPort, workerData} = require('worker_threads');

if(isMainThread) {
    console.log('this is mainThread');
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: {start:1},
    }));
    threads.add(new Worker(__filename, {
        workerData: {start:2},
    }));
    for(let worker of threads) {
        worker.on('message', message => console.log('from worker', message));
        worker.on('exit', () => {
            threads.delete(worker);
            if(threads.size === 0) {
                console.log('job done');
            }
        });
    }
} else {
    const data = workerData;
    console.log('this is worker thread');
    parentPort.postMessage(data.start + 100);
}