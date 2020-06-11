const calculateWinner = (squares) => {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      console.log("winner found");
      return winningPatterns[i];
    }
  }

  console.log("Winner not found");
  return null;
};

export { calculateWinner };
