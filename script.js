const engChars = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const engLength = engChars.length;

document.getElementById('codeButton').addEventListener('click', process)

function process() {
    let input = document.getElementById('userInput').value; // Takes the user's text input as string
    let text = input.split(" "); // Splits string into an array of individual words
    let newString = [];
    for (let i = 0; i < text.length; i++) {
        let word = text[i];
        newWord = encrypt(word);
        newString.push(newWord);
    }
    const output = newString.join(' ');
    console.log(`${input} = ${output}`);
    document.getElementById('display').innerHTML = output;
}

function encrypt(word) {
    const limit = word.length; // Sets the limit at the number of chars in word
    let addNum = 3;
    if (parseInt(document.getElementById('userNum').value) > 0) {
        addNum = takeValue();
    };
    let subNum = 26 - addNum; // e.g. 26 - 3 = 23. This is the formula for returning to the start of the alphabet
    let output = ''
    for (let i = 0; i < limit; i++) {
            let letter = word[i]; // e.g. letter = cab(0) = c
            let charNum = engChars.indexOf(letter); // e.g. c = engChar(2)
            if (charNum + addNum > 25) {
                letter = engChars[charNum - subNum]; // ensures x, y, z don't return undefined
            } else {
                letter = engChars[charNum + addNum]; // e.g. new letter = c + 3 = f
            }
            output = output + letter;
        }
    return output;

}

function takeValue() {
    let addNum = parseInt(document.getElementById('userNum').value);
    console.log(`Displace by ${addNum}`);
    return addNum;
}
