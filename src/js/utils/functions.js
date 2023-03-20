const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

const lowerCase = upperCase.map(char => char.toLowerCase());

const numbers = Array.from({ length: 10 }, (_, i) => i);

const symbols = ['*', '!', '.', '-', '#', '@']

export default function encode({
    includeMajus,
    includeNumbers,
    includeSymbols,
    passwordLength = 8
}) {
    const includedSets = [lowerCase];
    if (includeMajus) includedSets.push(upperCase);
    if (includeNumbers) includedSets.push(numbers);
    if (includeSymbols) includedSets.push(symbols);

    const passwordArray = [];

    for (let i = passwordLength; i > 0; i--) {
        const randomSet = Math.floor(Math.random() * includedSets.length);
        const randomChar = Math.floor(Math.random() * includedSets[randomSet].length);

        passwordArray.push(includedSets[randomSet][randomChar]);
    };

    return passwordArray.join('');
}

