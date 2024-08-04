let color = 'black';
function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());  
    board.style.gridTemplateColumns = 'repeat(16, 1fr)';
    board.style.gridTemplateRows = 'repeat(16, 1fr)';

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSqaure);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}
populateBoard(16);

function changeSize(input) {
    if (input >=2 || input<=100) {
        populateBoard(input);
    } else {
        console.log("Input not allowed!");
    }
}

function colorSqaure() {
    this.style.backgroundColor = color;
}

function changeColor(choice) {
    color = choice;
}

function getRandomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    // Construct the RGB color string.
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
}