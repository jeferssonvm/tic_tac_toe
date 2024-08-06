import React from 'react'
import './GameResult.css'
export const GameResult = ({count, gameResult, player, setReset}) => {

  return (
    <div className='result'>
        {gameResult == true ?
            <div className='result__info'>
                <h3>Felicidades Jugador:</h3>
                <h2>{player == "X"? "O":"X"}</h2>
                <h3>Ganaste</h3>
                <button className='button--reset' onClick={()=>setReset(true)}>Reset</button>
            </div> 
            : (count >9 && 
            <div className='result__info'>
              <h2>Empate</h2>
              <button className='button--reset' onClick={()=>setReset(true)}>Reset</button>
            </div>    )
        }
    </div>
  )
}
