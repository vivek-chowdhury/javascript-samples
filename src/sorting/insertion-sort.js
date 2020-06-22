function performInsertionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {

        let current = arr[i];
        let index = i - 1;
        while (index >= 0 && arr[index] > current) {
            arr[index + 1] = arr[index];
            index -= 1;
        }
        arr[index + 1] = current;
    }
    return arr;
}

function startInsertionSort(value) {
    let o = (value) ? value.split(',') : [68, 10, 4, -10, 8, 100, 32];
    console.log(performInsertionSort(o));
}