/* inside */
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/* outside */
let nums = [10, 20, 30];
swap(nums, 0, 2);
console.log(nums);

