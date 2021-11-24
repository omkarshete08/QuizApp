import '../components/Menu.css'
import {gameStateContext} from '../helpers/Contexts'
import {useContext} from 'react';
import {Questions} from '../helpers/Questions'

function FinishQuiz() {

    //To restart the quiz and set the score to 0 and set the state to menu
    const restartGame = () => {
        setScore(0)
        setGameState('menu')
    }

    const {score, setScore, gameState, setGameState, username} = useContext(gameStateContext)

    return (
        
        <div className="FinQuiz">
            <h1>Quiz Finished</h1>
            <h2>{username}</h2>
            <h2>{score} / {Questions.length}</h2>
            <button onClick={restartGame}>Restart</button>
        </div>
        
    )

}

export default FinishQuiz;