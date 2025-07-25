function ClimbingStairs(n){
    
    let a = 1, b = 1;

    for (let i = 2; i <= n; i++) {

        const temp = a + b;
        a = b;
        b = temp;
    }

    return b;
    
}
console.log(ClimbingStairs(5));