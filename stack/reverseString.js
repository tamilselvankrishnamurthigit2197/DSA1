function reverseString(str) {
    const stack = [];

    for(let char of str){
        stack.push(char);
    }

    /* have to save the pop outs into a string */
    let reversedStr = "";

    while(stack.length > 0){
        reversedStr += stack.pop();
    }
    return reversedStr;
}
const reversedString = reverseString('Athadu nandu parthu');
console.log(reversedString);
