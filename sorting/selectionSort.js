function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i+1; j < arr.length; j++) {
            /* 3, a[1] < 10, a[0] => min = j => min = 1 */
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        /* [arr[0], arr[1]] = [arr[1], arr[0]] */
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}
console.log(SelectionSort([10, 3, 2, 7]));
