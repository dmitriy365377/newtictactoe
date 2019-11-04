const tds = document.querySelectorAll('#field td');

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', replay);

const playerNumberOne = document.getElementById('one');
const playerNumberTwo = document.getElementById('two');

const resetButton = document.querySelector('#eject');
resetButton.addEventListener('click',reset1);

prepareClick(tds)

function prepareClick(tds) {
    for (let i = 0; i < tds.length; i++) {
        tds[i].innerHTML = "";
        tds[i].addEventListener('click', tdClick)
    }
}


var currentGamer = "X";

function tdClick() {
    this.innerHTML = currentGamer;
    if (currentGamer == "X") {
        currentGamer = "O";
        document.getElementById("player").innerHTML = "NEXT PLAYER - O ";
    } else {
        currentGamer = "X";
        document.getElementById("player").innerHTML = "NEXT PLAYER - X ";
    }
    this.removeEventListener('click', tdClick)
    const winner = checkWin(tds);
    if (winner !== false) {
        alert(`Победил игрок: ${winner}`)
        if (winner === "X") {
            firstCounter()
        } else {
            secondCounter()
        }
    }
}

function reset1( ){
    playerNumberOne.innerHTML=0 ;
    playerNumberTwo.innerHTML=0;
}

const firstCounter = score(0, playerNumberOne)
const secondCounter = score(0, playerNumberTwo) 

function score(countOne, player) {
    return function () {
        countOne++
        player.innerHTML = countOne;
        player.innerHTML = countOne;
        return countOne
    }
}

function replay() {
    prepareClick(tds)
}

function checkWin(tds) {
    const winningArray = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningArray.length; i++) {
        const wa = winningArray[i];
        if (
            tds[wa[0]].innerHTML == tds[wa[1]].innerHTML &&
            tds[wa[1]].innerHTML == tds[wa[2]].innerHTML &&
            tds[wa[0]].innerHTML != ""
        ) {
            return tds[wa[0]].innerHTML;
        }

    }
    return false;
}

