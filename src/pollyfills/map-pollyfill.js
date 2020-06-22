let mapList = [10, 20, 30, 40, 50];

Array.prototype.customMap = function (fn, ...thisArg) {
    let ref = thisArg.splice(1),
        nList = [];
    ref = (ref) ? ref : this;
    for (let i = 0; i < this.length; i++) {
        const o = fn.call(ref, this[i], i, this);
        nList.push(o);
    }
    return nList;
}

function startCustomMap() {
    // let x = mapList.map((a) => {
    //     a += a / 2;
    //     return a;
    // });

    let y = mapList.customMap((a) => {
        a += a / 2;
        return a;
    }, this);
    console.log(y);
}