let input = document.getElementById('inp');
let div1 = document.getElementById('a1');
let div2 = document.getElementById('a2');
let div3 = document.getElementById('a3');
let div4 = document.getElementById('a4');


let colors = ["red","yellow", "Grey","Light lue","Dark blue","Green","Yellow","Pink","Orange","#6EFAFF","#9832FF","#FF1ECE","#FF930F","#19FFF0","#5FFFD4","#5FFFD4"];

function add() {
    input.value++;
    div1.style.backgroundColor = getColor();
    div2.style.backgroundColor = getColor();
    div3.style.backgroundColor = getColor();
    div4.style.backgroundColor = getColor();
    addElement();

};

function getColor() {
  let randomColorIndex = getRandom(0, colors.length);
    return colors[randomColorIndex];
};

function getRandom(min, max) {
return Math.floor(Math.random() * (max - min) + min)
};
function addElement() {
  document.body.onload = addElement;

  const newDiv = document.createElement('div');
  newDiv.id = 'new';
  const newContent = document.createTextNode('New Div!');

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById('new');

  document.body.insertBefore(newDiv, currentDiv);
  newDiv.style.display = 'flex';
  newDiv.style.float = 'left';
  newDiv.style.margin = '5px';
  newDiv.style.border = 'solid';
  newDiv.style.borderWidth = '3px';
  newDiv.style.borderColor = 'red';
  newDiv.style.width = '35px';
  newDiv.style.height = '35px';
};