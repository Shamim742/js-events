// option directly set on the button
// {/* <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button> */}

// option 2 use it sometimes
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.onclick = makeGreen;


function makeGreen(){
  document.body.style.backgroundColor = 'green';
}
// another option 3
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
   document.body.style.backgroundColor = 'purple'
}
// option: 4 addEventListener
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// another option:4
const makeLightBlue = document.getElementById('make-lightblue');
makeLightBlue.addEventListener('click', function makeLightBlue(){
 document.body.style.backgroundColor = 'lightblue'
})

// final option: 4  important
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
 })