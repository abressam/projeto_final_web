const allSquares = document.querySelectorAll(".squares");

const winPositions = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];


let xRound = true;
let rounds = 0;


const enableButtons = () => {
    allSquares.forEach((square) => {
    square.innerText = "";
    square.classList.remove('pressed');
    square.classList.add('unpressed')
  });
};

const winFunction = (letter) => {
  if (letter == "X") {
    alert('X ganhou')
  } else {
    alert('O ganhou') 
  }
  xTurn = true
  count = 0;
  enableButtons();
};


const drawFunction = () => {
  alert('Deu empate')
  xTurn = true
  count = 0;
  enableButtons();

};

const winChecker = () => { 
  for (let i of winPositions) {
    let [element1, element2, element3] = [
      allSquares[i[0]].innerText,
      allSquares[i[1]].innerText,
      allSquares[i[2]].innerText,
    ];
    
    
    if (element1 != "" && (element2 != "") && (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        
        winFunction(element1);
      }
    }
  }
};

const pickSquare = (square) => {
    if (xRound) {
        xRound = false;
        
        square.innerText = "X";
        square.classList.remove('unpressed');
        square.classList.add('pressed');
        square.removeAttribute("onclick");
    } else {
        xRound = true;
        
        square.innerText = "O";
        square.classList.remove('unpressed');
        square.classList.add('pressed');
        square.removeAttribute("onclick");
    }
    
    rounds += 1;
    if (rounds == 9) {
        drawFunction();
    } else if (rounds >= 5) {
        winChecker();
    }
  };