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

    secretWord.innerText = newString;
}

btnEncryption.addEventListener('click', (event) => {
    event.preventDefault();
    const message = document.getElementById('message');

    transformToRot13(message.value);
});
