function reverseString(str) {

    let reversedStr = "";

    /* iterate through for loop from last element to first */
    for (let i = str.length - 1; i >= 0; i--) {
        /* i,h,t,r,u,m,a,n,h,s,i,r,K  n,a,v,l,e,s,l,i,m,a,T */
        reversedStr += str[i];
    }

    return reversedStr;
}
console.log(reverseString("Tamilselvan Krishnamurthi"));
