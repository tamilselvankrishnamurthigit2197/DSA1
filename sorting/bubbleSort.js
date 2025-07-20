function BubbleSort(arr) {

    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i -1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(BubbleSort([5, 3, 4, 6, 2, 8]));
