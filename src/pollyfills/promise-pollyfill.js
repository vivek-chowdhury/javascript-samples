/* 
    Interview Question: 
        1. Write Promise Pollyfill
        2. Write code to resolve Promise directly via Promise.resolve("Testing resolve");
        3. Write code to reject Promise directly via Promise.reject("Testing reject");
 */

let promiseCounter = Math.floor(Math.random() * 10);
console.log(' Current counter value : ', promiseCounter);
function commonExecutor(resolve, reject) {
    if(promiseCounter % 2 == 0) {
        setTimeout(() => {
            resolve('Hurrey ! you did it !');
        }, 500);
    } else {
        setTimeout(() => {
            reject('Sorry ! better luck next time.');
        }, 500);
    }
}

function PromisePollyfill(executor) {
    let onResolve, onReject, isFullfilled, isRejected, isCalled, value;

    function resolve(val) {
        isFullfilled = true;
        value = val;
        if(typeof onResolve == 'function') {
            isCalled = true;
            onResolve(value);
        }
        return this;
    }

    function reject(reason) {
        isRejected = true;
        value = reason;
        if(typeof onReject == 'function') {
            isCalled = true;
            onReject(value);
        }
        return this;
    }

    this.then = function(callback) {
        onResolve =  callback;
        if(isFullfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }
        return this;
    }

    this.catch = function(callback) {
        onReject = callback;
        if(isRejected && !isCalled) {
            isCalled = true;
            onReject(value);
        }
        return this;
    }
    try {
        executor(resolve, reject);
    }catch (err) {
        reject(err);
    }
}

// Question 2:
PromisePollyfill.resolve = (value) => {
    return new PromisePollyfill((resolve) => {
        resolve(value);
    });
}

// Question 3:
PromisePollyfill.reject = (reason) => {
    return new PromisePollyfill((resolve, reject) => {
        reject(reason);
    });
}

function promiseInvoker(doRunPolyfill = false) {
    if(!doRunPolyfill){
        const defaultPromise = new Promise(commonExecutor);
        defaultPromise.then((message) => {
            console.log(message);
        }).catch((message) => {
            console.log(message);
        })
    }else {
        const defaultPromise = new PromisePollyfill(commonExecutor);
        defaultPromise.then((message)=> {
            console.log(message);
        }).catch((reason) => {
            console.log(reason);
        })
    }
}

// Commenting below code as this polyfill is used in another file.
// promiseInvoker(true);
// PromisePollyfill.resolve("Testing resolve").then((value) => {
//     console.log(value);
// });

// PromisePollyfill.reject("Testing reject").catch((reason) => {
//     console.log(reason);
// });

export default PromisePollyfill;