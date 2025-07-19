function addItem(arr) {    
    arr.push(4);
    console.log("inside function", arr);   
}

let myArray = [1, 2, 3];
addItem(myArray);
console.log("outside function", myArray);

