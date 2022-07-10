let button = document.getElementById('bt');
let input = document.getElementById('inp');

button.style.backgroundColor = 'red';
input.style.borderColor = "yellow"

button.addEventListener('click', add);
function add() {
    input.value++;
};