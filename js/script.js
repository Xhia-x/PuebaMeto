const grid = document.getElementById('board');

function createGrid() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerText = ' ';
            grid.appendChild(cell);
        }
    }
}

function spawnVirus() {
    const cell = document.getElementsByClassName('cell');
    

    for(let i = 0 ; i < 10; i++) {
        //make random number between 0-15
        let pos = Math.floor(Math.random() * 81);
        cell.item(pos).classList.add('bomb');
        cell.item(pos).innerText = ' ';
    }
}


function click(cell) {
    if (cell.classList.contains('bomb')) {
        cell.classList.add('bomb');
        cell.innerText = '🦠';
        setTimeout(() => {
            alert('Game Over');
            location.reload();
        }, 1000);   
    }else{

    }
}

function revelarCasillas(){
    
}



grid.addEventListener('click', (event) => {
    const cell = event.target;
    click(cell);
    revelarCasillas(cell);
});



createGrid();
spawnVirus();

