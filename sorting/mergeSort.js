function MergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length/2);
    const left = MergeSort(arr.slice(0, mid));
    const right = MergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];

    let i = 0, j = 0;
    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) result.push(left[i++]);
            else result.push(right[j++]);
            
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [8, 2, 4, 5, 6, 1, 9];
console.log("Sorted Array: ", MergeSort(arr));
