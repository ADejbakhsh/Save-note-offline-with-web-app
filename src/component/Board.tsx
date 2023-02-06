import '../css/Board.css';
import Square from './Square'

interface board_t {
  xIsNext: Boolean,
  squares: Array<string | null>,
  onPlay: Function

}


export default function Board({ xIsNext, squares, onPlay }: board_t) {

  function calculateWinner(squares: Array<string | null>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(squareNumber: number) {
    if (squares[squareNumber] || calculateWinner(squares))
      return;

    const nextSquares = squares.slice();
    if (xIsNext)
      nextSquares[squareNumber] = "X";
    else
      nextSquares[squareNumber] = "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status_r: string = '';
  if (winner) {
    status_r = "Winner: " + winner;
  } else {
    status_r = "Next player: " + (xIsNext ? "X" : "O");
  }



  function html_row() {
    const number_of_row = 3
    const number_of_square = 3

    return (
      <>
        {Array.from({ length: number_of_row }, (_, i) => (
          <div className="board-row">
            {Array.from({ length: number_of_square }, (_, j) => (
              <Square value={squares[stupid(i,j)]} onSquareClick={() => handleClick(stupid(i,j))} />
            ))}
          </div>
        ))}

      </>
    )
  }

  function stupid(i:number, j:number){
    return i * 3 + j
  }



  return (
    <>
      <div className="status">{status_r}</div>
      {html_row()}
    </>
  )
}