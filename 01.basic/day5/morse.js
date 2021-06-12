const morse = new Map();
morse.set('a',".-");
morse.set('b',"-...");
morse.set('c',"-.-.");
morse.set('d',"-..");
morse.set('e',".");
morse.set('f',"..-.");
morse.set('g',"--.");
morse.set('h',"....");
morse.set('i',"..");
morse.set('j',".---");
morse.set('k',"-.-");
morse.set('l',".-..");
morse.set('m',"--");
morse.set('n',"-.");
morse.set('o',"---");
morse.set('p',".--.");
morse.set('q',"--.-");
morse.set('r',".-.");
morse.set('s',"...");
morse.set('t',"-");
morse.set('u',"..-");
morse.set('v',"...-");
morse.set('w',".--");
morse.set('x',"-..-");
morse.set('y',"-.--");
morse.set('z',"--..");

const result = new Set();

["gin", "zen", "gig", "msg"].forEach(
    item => {
        const encodeString = changeToMorse(item,morse);
        console.log(encodeString);
        result.add(encodeString);
    }
);

console.log(result.size);

function changeToMorse(text,morseCode) {
    text = text.toLowerCase();
    morseText='';
    for(let char of text) {
        morseText = morseText + morseCode.get(char);
    }
    return morseText;
}

