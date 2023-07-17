const grid = document.getElementById('board');

function createGrid() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerText = `${i + 1}, ${j + 1}`;
            grid.appendChild(cell);
        }
    }
}




createGrid();
console.log(document.getElementsByClassName('cell'));
