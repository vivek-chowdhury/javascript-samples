Array.prototype.customReduce = function (fn, acc) {
    let _acc = (acc) ? acc : this[0],
        index = (acc) ? 0 : 1;
    for (let i = index; i < this.length; i++) {
        _acc = fn.call(this, _acc, this[i]);
    }
    return _acc;
}

let numbers = [10, 20, 30, 40, 50];

function calculate(acc, curr) {
    return acc + curr;
}

function startCustomReduce() {
    console.log('Inbuild method : ', numbers.reduce(calculate));
    console.log('Custom Method : ', numbers.customReduce(calculate));
}