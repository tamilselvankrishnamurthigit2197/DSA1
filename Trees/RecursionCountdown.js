function CountDown(number){
    /* base case : recursion to stop the infinite */
    if (number === 0) {
        console.log("And it's the stopping point");
        return;
    }
    console.log(number);
    CountDown(number - 1);
}
CountDown(5);

