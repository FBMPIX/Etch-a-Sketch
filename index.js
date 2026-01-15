let gridSize = 16;
const container = document.querySelector('#container #gridspace');
const resetButton = document.querySelector('#container #reset');
const resizeButton = document.querySelector('#container #resize');
const div = document.createElement('div');

container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

div.style.height = `${860/gridSize}px`;
div.style.width = `${860/gridSize}px`;
div.style.border = '1px solid black';
div.style.backgroundColor = 'white';

function fillGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = div.cloneNode(true);
        square.addEventListener('click', () => {
            square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
}

fillGrid();

resetButton.addEventListener('mouseover', () => {
    const squares = document.querySelectorAll('#gridspace div');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    });
});

resizeButton.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (max 100): ");
    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert("Invalid size. Please enter a number between 1 and 100.");
            return;
        }
        gridSize = newSize;
        container.innerHTML = '';
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        div.style.height = `${860/gridSize}px`;
        div.style.width = `${860/gridSize}px`;
        fillGrid();
    }
});
