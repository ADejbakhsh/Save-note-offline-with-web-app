import '../css/Board.css';


interface Square_t {
  value: String | null
  onSquareClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Square({value, onSquareClick} : Square_t) {

  return(
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
}