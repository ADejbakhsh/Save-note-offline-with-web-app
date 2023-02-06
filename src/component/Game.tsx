import '../css/Board.css'
import Board from './Board';
import { useState } from 'react';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(nextSquares: Array<string | null>) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function timeTravel(nextMove : number) {
        setCurrentMove(nextMove);
    }

    const list_history = history.map((square, move) =>
        <li key={move} onClick={() => timeTravel(move)}>
            <button>Go to move {move}</button>
        </li>
    )


    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />        </div>
            <div className="game-info">
                <ol>{list_history}</ol>
            </div>
        </div>
    );
}