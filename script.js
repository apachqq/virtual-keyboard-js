let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');

for (let key of keys) {
    key.onclick = function () {
        display.textContent = display.textContent + key.textContent;
    }
}