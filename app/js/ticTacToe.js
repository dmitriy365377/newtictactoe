window.onload = () => {
  const space = document.getElementById("space");
  const playerNumberOne = document.getElementById("one");
  const playerNumberTwo = document.getElementById("two");
  const restartButton = document.querySelector("#restart");
  restartButton.addEventListener("click", replay);
  const resetButton = document.querySelector("#eject");
  resetButton.addEventListener("click", reset);

  prepareDivBlock();
  const boxes = document.getElementsByClassName("square");

  function prepareDivBlock() {
    for (let i = 0; i < 9; i++) {
      space.innerHTML += '<div class="square"></div>';
    }
  }

  let step = 0;

  const whosIsPlayer = event => {
    if (step % 2 === 0) {
      event.target.innerHTML = "X";
      document.getElementById("player").innerHTML = "NEXT PLAYER - O ";
    } else {
      event.target.innerHTML = "O";
      document.getElementById("player").innerHTML = "NEXT PLAYER - X ";
    }
    step++;
    const winner = checkWin(boxes);
    whoIsWin(winner);
  };

  function whoIsWin(winner) {
    if (winner !== false) {
      alert(`Победил игрок: ${winner}`);
      if (winner === "X") {
        firstCounter();
      } else {
        secondCounter();
      }
    }
  }

  const firstCounter = score(0, playerNumberOne);
  const secondCounter = score(0, playerNumberTwo);

  function score(countOne, player) {
    return function() {
      countOne++;
      player.innerHTML = countOne;
      player.innerHTML = countOne;
      return countOne;
    };
  }

  function replay() {
    console.log("clear");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].innerHTML = "";
    }
  }

  function reset() {
    playerNumberOne.innerHTML = 0;
    playerNumberTwo.innerHTML = 0;
  }

  space.addEventListener("click", whosIsPlayer);

  function checkWin(boxes) {
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
        boxes[wa[0]].innerHTML == boxes[wa[1]].innerHTML &&
        boxes[wa[1]].innerHTML == boxes[wa[2]].innerHTML &&
        boxes[wa[0]].innerHTML != ""
      ) {
        return boxes[wa[0]].innerHTML;
      }
    }
    return false;
  }
};
