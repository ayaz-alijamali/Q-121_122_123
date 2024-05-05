// Question _____________ 121
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip number 5
    }
    console.log(i);
}
;
// Question ___________________ 122
let count = 10;
while (count >= 1) {
    console.log(count);
    if (count === 5) {
        break;
    }
    count--;
}
;
// Question _______________ 123
const inputString = "Hello, World!";
let foundVowel = false;
for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i].toLowerCase();
    if (currentChar === "a" || currentChar === "e" || currentChar === "i" || currentChar === "o" || currentChar === "u") {
        foundVowel = true;
        console.log(`Found the first vowel '${currentChar}' at index ${i}.`);
        break;
    }
}
if (!foundVowel) {
    console.log("No vowels found in the string.");
}
;
export {};
