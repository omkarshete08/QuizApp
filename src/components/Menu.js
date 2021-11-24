import react, {useContext} from "react";
import './Menu.css';
import {gameStateContext} from '../helpers/Contexts'


function Menu(){

    const {gameState, setGameState, username, setUsername, score, setScore} = useContext(gameStateContext)

    return (
        <div className="Menu">
        <label>Enter Your name</label>
        <input type="text" placeholder="Enter name" onChange={(event) => setUsername(event.target.value)}/>
        <button onClick={() => {
            setGameState('playing')
        }}>Start</button>
        </div>
    )

}

export default Menu;