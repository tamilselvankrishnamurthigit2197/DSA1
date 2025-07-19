const isValid = (str) =>{
    const stack = []; //to store open brackets

    const brackets = {
        "{" : "}",
        "[" : "]",
        "(" : ")",
    };

    /* loop needed to iterate chars of string */
    for (let char of str ) {
        if (brackets[char]) {
            stack.push(char);
        }else{
            /* if close bracket came, pop out the open bracket  */
            const top = stack.pop();
            /* if stack is empty or the char of close bracket didn't close/matches the open bracket */
            if (!top || brackets[top] != char) {
                return false;
            }
        }
    }
    return stack.length === 0; //empty stack is needed after validation
}

console.log(isValid("((]](("));
console.log(isValid("((}}"));
console.log(isValid("([[]])"));
console.log(isValid("()[]{}"));
console.log(isValid(")(][}{"));
