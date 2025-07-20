function QuickSort(arr) {
    if (arr.length <=1) return arr;

    let pivot = arr[arr.length - 1]; //last element
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)];
}
const arr = [9, 3, 7, 4, 1, 6];
console.log("sorted", QuickSort(arr));
