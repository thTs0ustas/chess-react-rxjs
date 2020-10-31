import React, {useEffect, useState} from 'react'
import './App.css'
import {gameSubject, initGame, resetGame} from './rxjs/Game'
import Board from './components/Board'
import Aside from "./components/History/Aside";

function App(props) {
  const [board, setBoard] = useState([])
  const [isGameOver, setIsGameOver] = useState()
  const [result, setResult] = useState()
  const [turn, setTurn] = useState()
  useEffect(() => {
    initGame()
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board)
      setIsGameOver(game.isGameOver)
      setResult(game.result)
      setTurn(game.turn)
    })
    return () => subscribe.unsubscribe()
  }, [])
  return (
    <div className='game'>
      <div className="container board">
        {isGameOver && (
          <h2 className="vertical-text">
            GAME OVER
            <button onClick={resetGame}>
              <span className="vertical-text"> NEW GAME</span>
            </button>
          </h2>
        )}
        <div className="board-container">
          <Board board={board} turn={turn}/>
        </div>
        {result && <p className="vertical-text">{result}</p>}
      </div>
      <div className='aside'>
        <Aside board={board} turn={turn} />
      </div>
    </div>
  )
}

export default App