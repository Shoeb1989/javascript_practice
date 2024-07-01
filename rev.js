function revString(text){
    for (let i = text.length-1; i >=0; i--){
        const element = text[i];
        console.log(element);
    }
}

const string = 'my name is shoeb';
const revarsed = revString(string);