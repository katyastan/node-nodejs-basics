import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    fork(('./src/cp/files/script.js'), args, {stdio: 'inherit'});
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
