function CustomPromise(init) {
    let thenCallback, catchRejectCallback;

    this.then = (resolveCallback, rejectedCallback) => {
        return new CustomPromise((resolve, reject) => {
            thenCallback = (value) => {
                const result = resolveCallback(value);
                resolve(result);
            };

            catchRejectCallback = (error) => {
                const err = rejectedCallback(error);
                reject(err);
            };
        });
    };

    const reject = (error) => {
        catchRejectCallback && catchRejectCallback(error);
    }

    const resolve = (value) => {
        thenCallback && thenCallback(value);
    };

    init(resolve, reject);
}


function startCustomPromise() {
    const promis = new CustomPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('Something happened !');
        }, 2000);

    }).then((value) => {
        console.log('value ', value);
        return 'Again something happened !';
    }, (err) => {
        console.log('Error ', err);
    }).then((value) => {
        console.log('Second ', value);
        return new CustomPromise((resolve, reject) => {
            setTimeout(() => {
                resolve('Final something happned again !')
            }, 2000);
        });
    }).then((value) => {
        value.then((data) => {
            console.log('Third time ', data);
        });

    });
}




// const promis = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Something happened !');
//     }, 2000);

// }).then((value) => {
//     console.log('value ', value);
// }, (err) => {
//     console.log('erro  ', err);
// })