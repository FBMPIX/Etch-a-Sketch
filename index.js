let gridSize = 16;

const container = document.querySelector('#container #gridspace');
const resetButton = document.querySelector('#container #reset');
const div = document.createElement('div');

container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

div.style.height = `${860/gridSize}px`;
div.style.width = `${860/gridSize}px`;
div.style.border = '1px solid rgba(209, 81, 235, 1)';
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

resetButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('#gridspace div');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    });
});
