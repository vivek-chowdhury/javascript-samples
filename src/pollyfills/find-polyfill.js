Array.prototype.customFind = function (fn, ...args) {
    let context = args[0];
    let result = 0;
    for (let i = 0; i < this.length; i++) {
        let match = fn.call(context, this[i], i, this);
        if (match) {
            result = this[i];
            break;
        }
    }
    return result;
}

function startFindPolyfill() {
    let mapList = [10, 20, 30, 40, 50];
    let result = mapList.customFind((x) => {
        return x > 30;
    });
    console.log(result);
}
// startFindPolyfill();