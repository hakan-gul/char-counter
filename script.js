const textarea = document.querySelector('textarea');
const totalChar = document.querySelector('#total-char');
const remChar = document.querySelector('#rem-char');

textarea.addEventListener("keyup",updateCounter)

function updateCounter(){
    let val = textarea.value.length;
    totalChar.textContent= val;
    remChar.textContent= textarea.getAttribute('maxlength') - val;
}

updateCounter();