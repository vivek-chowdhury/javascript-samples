function performMergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let division = arr.length / 2;
    let leftTree = arr.splice(0, division);
    return sort(performMergeSort(leftTree), performMergeSort(arr));
}

function sort(left, right) {
    let nList = []
    let len = Math.max(left.length, right.length);
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            nList.push(left.shift());
        } else {
            nList.push(right.shift());
        }
    }
    return [...nList, ...left, ...right];
}

function startMergeSort(value) {
    let olist = (value) ? value.split(',') : [68, 10, 4, -10, 8, 100, 32];
    console.log(performMergeSort(olist));
}