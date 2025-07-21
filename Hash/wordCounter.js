function WordCounter(text) {
    const lowerText = text.toLowerCase();

    const words = lowerText.match(/\b\w+\b/g);
    const wordMap ={};

    for(const word of words){
        if(word in wordMap){
            wordMap[word]++;
        }else{
            wordMap[word] = 1;
        }
    }

    return wordMap;
}

const text = "Hello, this is word map using hash";
const result = WordCounter(text);
console.log(result);
