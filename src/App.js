import { useState } from 'react';
import './App.css';
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import FinishQuiz from './components/FinishQuiz';
import {gameStateContext} from './helpers/Contexts'

function App() {

const [gameState, setGameState] = useState('menu')
const [username, setUsername] = useState("")
const [score, setScore] = useState(0)
  return (


  <div className="App"><h1>Quiz App</h1>
  <gameStateContext.Provider value={{gameState, setGameState, username, setUsername, score, setScore}}>
  {gameState === 'menu' && <Menu />}
  {gameState === 'playing' && <Quiz />}
  {gameState === 'finished' && <FinishQuiz />}
  </gameStateContext.Provider>
  </div>


  )
}

export default App;
