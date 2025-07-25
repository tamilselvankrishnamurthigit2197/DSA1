function factorial(n) {
    if(n < 0) return undefined;
    let result = 1;

    for(let i = 2; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(7));
/* 
result * i = i;
i = 1 => 1 * 1 = 1;
i = 2 => 1* 2 = 2;
i = 3 => 2* 3 = 6;
i = 4 => 6* 4 = 24;
i = 5 => 24* 5 = 120;
i = 6 => 120* 6 = 720;
i = 7 => 720* 7 = 5040
 */
