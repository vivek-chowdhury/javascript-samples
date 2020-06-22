function performSelectioinSort(arr) {
    let len = arr.length,
        index;
    for (let i = 0; i < len; i++) {
        index = i;
        for (let x = i + 1; x < len; x++) {
            if (arr[index] > arr[x]) {
                index = x;
            }
        }
        [arr[index], arr[i]] = [arr[i], arr[index]];
    }
    return arr;
}

function startSelectionSort(value) {
    let o = (value) ? value.split(',') : [68, 10, 4, -10, 8, 100, 32];
    console.log(performSelectioinSort(o));
}