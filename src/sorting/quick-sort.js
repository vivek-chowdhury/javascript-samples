function performQuickSort(arr, comparator = defaultComparator) {
    let sorted = [...arr];
    const recursiveSort = (startIndex, endIndex) => {
        if (endIndex - startIndex < 1) {
            return;
        }
        let pivotValue = sorted[endIndex];
        let splitIndex = startIndex;
        for (let i = startIndex; i < endIndex; i++) {
            let sort = defaultComparator(sorted[i], pivotValue);
            if (sort === -1) {
                if (splitIndex !== i) {
                    [sorted[splitIndex], sorted[i]] = [sorted[i], sorted[splitIndex]];
                }
                splitIndex++;
            }
        }
        [sorted[endIndex], sorted[splitIndex]] = [sorted[splitIndex], pivotValue];

        recursiveSort(startIndex, splitIndex - 1);
        recursiveSort(splitIndex + 1, endIndex);

    };

    recursiveSort(0, arr.length - 1);
    return sorted;
}

function defaultComparator(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

function startQuickSort(value) {
    let o = (value) ? value.split(',') : [200, 68, 10, 4, -10, 8, 100, 32];
    console.log(performQuickSort(o));
}