import { useContext, useState} from 'react';
import '../components/Menu.css'
import {Questions} from '../helpers/Questions'
import {gameStateContext} from '../helpers/Contexts'
function Quiz(){

    const selectedAns = (option) => {
        setChosenAns(option)
    }

    const nextQuestion = () => {
        if(chosenAns === Questions[currentQuestion].answer) {
            //right ans
            setScore((ov) => ov + 1)
        }else {
            //wrong ans
        }
        setCurrentQuestion((olderValue) => olderValue + 1)
    }
    //Last Question
    const endQuiz = () => {
        if(chosenAns === Questions[currentQuestion].answer) {
            setScore((ov) => ov + 1)
        }
        setGameState("finished")
    }


    //States
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [chosenAns, setChosenAns] = useState("")
    const {score, setScore, gameState, setGameState} = useContext(gameStateContext)
    
    return (
        <div className="Quiz">
            <h3>{Questions[currentQuestion].prompt}</h3>
            <button onClick={() => selectedAns("optionA")}>{Questions[currentQuestion].optionA}</button>
            <button onClick={() => selectedAns("optionB")}>{Questions[currentQuestion].optionB}</button>
            <button onClick={() => selectedAns("optionC")}>{Questions[currentQuestion].optionC}</button>
            <button onClick={() => selectedAns("optionD")}>{Questions[currentQuestion].optionD}</button>

            

           {currentQuestion === Questions.length-1 ? (<button className="endBtn" onClick={endQuiz}>Finish</button>) : 
           (<button className="endBtn" onClick={nextQuestion}>Next</button>)}
           

            
        </div>
        
    )
}

export default Quiz;