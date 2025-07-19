function increment(x) {
    x = x + 1;
    console.log("Inside function: ", x);

    /* x = 5 + 1 = 6 */
}

/* outside function */
let num = 5;
increment(num);
console.log("outside function: ", num); //5

/* the original won't get affected */
