const btnEncryption = document.querySelector('.message-encryption');
const secretWord = document.getElementById('secretWord');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function transformToRot13(stringToTransform) {
    let newString = '';
    let index;

    for (let letter of stringToTransform) {
        if (letter === ' ') {
            newString += letter;
        } else {
            index = alphabet.indexOf(letter.toUpperCase()) + 13;

            index > alphabet.length - 1 ? (index -= alphabet.length) : index;
            newString += alphabet[index];
        }
    }

    randomLetter(newString);
}

function randomLetter(word) {
    let iterations = 0;
    secretWord.dataset.value = word.toUpperCase();

    const interval = setInterval(() => {
        secretWord.innerText = word
            .split('')
            .map((letter, index) => {
                if (index < iterations) {
                    // shift of 1 to randomize
                    return secretWord.dataset.value[index].toLocaleUpperCase();
                }
                return alphabet[
                    Math.floor(Math.random() * 26)
                ].toLocaleUpperCase();
            })
            .join('');

        if (iterations >= secretWord.dataset.value.length)
            clearInterval(interval);

        iterations += 1;
    }, 100);
}

btnEncryption.addEventListener('click', (event) => {
    event.preventDefault();
    const message = document.getElementById('message');

    transformToRot13(message.value);
});
