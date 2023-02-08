import PromisePollyfill from './promise-pollyfill.js';

const counter = Math.floor(Math.random() * 10);
console.log('Promise.all counter : ', counter);
function programmingPromise(filler) {
    return new Promise((resolve, reject) => {
        if(counter % 2 === 0) {
            resolve(`${filler} is doing programming !`);
        } else {
            reject(`${filler} took break from programming !`);
        }
    })
}

function javascriptPromise(filler) {
    return new Promise((resolve, reject) => {
        if(counter % 2 === 0) {
            resolve(`${filler} is doing javascript practice !`);
        } else {
            reject(`${filler} is not doing javascript practice !`);
        }
    })
}

function pollyfillPromise(filler) {
    return new Promise((resolve, reject) => {
        if(counter % 2 === 0) {
            resolve(`${filler} is doing practice of Promise pollyfill !`);
        } else {
            reject(`${filler} is not doing practice of Promise pollyfill !`);
        }
    })
}

// Writing Promise.all using default Promise
Promise.polyfillAll = (promises) => {
    return new Promise((resolve, reject) => {
        const result = [];
        if(!promises || promises.length == 0) {
            resolve(result);
        }
        let pendingPromises = promises.length;
        promises.forEach((promise, index) => {
            promise.then((response) => {
                result[index] = response;
                pendingPromises--;
                if(pendingPromises == 0) {
                    resolve(result);
                }
            }).catch((reason) => {
                reject(reason);
            })
        }); 
    })
}

//Write Promise.all using Promise polyfill
PromisePollyfill.all = (promises) => {
    return new PromisePollyfill((resolve, reject) => {
        const result = [];
        if(!promises || promises.length == 0) {
            resolve(result);
        }
        let pendingPromises = promises.length;
        let isCaughtError = false;
        for( let i = 0; i < pendingPromises; i++) {
            const promise = promises[i];
            promise.then((response) => {
                result[i] = response;
                if(!isCaughtError && i == (promises.length - 1)) {
                    resolve(result);
                }
            }).catch((reason) => {
                isCaughtError = true;
                reject(reason);
            });
            if(isCaughtError) break;
        }
    })
}

async function doExecutePromises(doRunPolyfill = false, doRunCustomPromise = false) {
    if(!doRunPolyfill) {
        await Promise.all([
            programmingPromise('Vivek Chowdhury'),
            javascriptPromise('Vivek Chowdhury'),
            pollyfillPromise('Vivek Chowdhury')
        ]).then((response) => {
            console.log('Resolved : ', response);
        }).catch((reason) => {
            console.log('Error Caught : ', reason);
        });
    } if(doRunPolyfill && doRunCustomPromise) {
        await PromisePollyfill.all([
            programmingPromise('Vivek Chowdhury'),
            javascriptPromise('Vivek Chowdhury'),
            pollyfillPromise('Vivek Chowdhury')
        ]).then((response) => {
            console.log('Resolved : ', response);
        }).catch((reason) => {
            console.log('Error Caught : ', reason);
        });
    }else {
        await Promise.polyfillAll([
            programmingPromise('Vivek Chowdhury'),
            javascriptPromise('Vivek Chowdhury'),
            pollyfillPromise('Vivek Chowdhury')
        ]).then((response) => {
            console.log('Resolved : ', response);
        }).catch((reason) => {
            console.log('Error Caught : ', reason);
        });
    }
}

doExecutePromises(true, true);