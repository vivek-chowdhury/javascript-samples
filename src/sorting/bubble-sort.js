function performBubbleSort(arr) {
    let cloneArray = [...arr];
    let len = cloneArray.length - 1;
    let index = 0;
    for (let x = 0; x <= len; x++) {
        index = x;
        for (let y = len; y >= 0; y--) {
            if (cloneArray[index] < cloneArray[y]) {
                [cloneArray[index], cloneArray[y]] = [cloneArray[y], cloneArray[index]];
                index = y;
            }
        }
    }
    return cloneArray;
}

function startBubbleSort(value) {
    let o = (value) ? value.split(',') : [68, 10, 4, -10, 8, 100, 32];
    console.log(performBubbleSort(o));
}