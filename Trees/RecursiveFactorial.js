function factorial(number) {

    /* base case to change "0" value to do factorial */
    if(number === 0) return 1;

    return number * factorial(number - 1);
}
console.log(factorial(5));
