function printChessboard() {
  const size = 8;
  const chessboard = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const cell = ((i + j) % 2 === 0) ? " " : "■";
      row.push(cell);
    }
    chessboard.push(row.join(""));
  }

  for (let i = 0; i < size; i++) {
    console.log(chessboard[i]);
  }
}

printChessboard();
