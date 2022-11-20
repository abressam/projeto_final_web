const allSquares = document.querySelectorAll(".squares");

//Todos as possíveis vitórias
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

//Jogador X sempre começa
let xRound = true;
let rounds = 0;

const disableButtons = () => {
  allSquares.forEach((square) => {
    square.removeAttribute('onclick');
    square.classList.remove('unpressed');
  });
}

// Monta a pagina do vencedor.
const showWinner = (letter) => {
  const container = document.querySelector('.container');
  container.innerHTML = ""
  container.classList.remove('container')
  container.classList.add('end-game-container')
  const img = document.createElement('img');
  img.setAttribute('src','assets/trophy.svg');
  const h1 = document.createElement('h1');
  h1.innerText = `Jogador ${letter} venceu !!!`;
  container.appendChild(img);
  container.appendChild(h1);
}

// Monta a pagina de empate
const showDraw = () => {
  const container = document.querySelector('.container');
  container.innerHTML = ""
  container.classList.remove('container')
  container.classList.add('end-game-container')
  const img = document.createElement('img');
  img.setAttribute('src','assets/tie.svg');
  container.appendChild(img);
}

//Checa se algum jogador ganhou ou se empatou
const checkForWin = () => {
  //Passa pelas posições de vitórias
  for (let i of winPositions) {
    let [position1, position2, position3] = [
      allSquares[i[0]].innerText,
      allSquares[i[1]].innerText,
      allSquares[i[2]].innerText,
    ];
    //Verifica se as posicões estão preenchidas
    if (position1 != "" && (position2 != "") && (position3 != "")) {
      if (position1 == position2 && position2 == position3) {
        //Todos são iguais então alguem ganhou.
        disableButtons();
        setTimeout(showWinner,500,position1)
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
    //Conta o numero de rounds se for igual a 9 siginifica que empatou.
    rounds += 1;
    if (rounds == 9) {
      setTimeout(showDraw,500)
    } else if (rounds >= 5) {
      checkForWin();
    }
  };

