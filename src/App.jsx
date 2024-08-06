import './reset.css'
import { useEffect, useState } from 'react'
import './App.css'
import winner from './utils/winner'

import { Numeral } from './Components/Numeral/Numeral'
import { GameResult } from './Components/GameResult/GameResult'
const gameBoardas =[
  {id:0,value:null},{id:1,value:null},{id:2,value:null},
  {id:3,value:null},{id:4,value:null},{id:5,value:null},
  {id:6,value:null},{id:7,value:null},{id:8,value:null},
]

function App() {

  const [count, setCount] = useState(0)
  const [ player , setPlayer] = useState()
  const [cells, setCells] = useState([...gameBoardas])
  const [gameResult, setGameResult] = useState(false);
  const [reset, setReset] = useState(false)
  
  useEffect(()=>{
    setPlayer(player==="X"? "O":"X")
    setCount(count+1)
    setGameResult(winner(player,cells))
  },[cells]);
  useEffect(()=>{
    console.log("reset",reset)
    if(reset){
      console.log("reset",reset)
      setCells([...gameBoardas])
      setCount(0)
      setGameResult(false)
      setReset(false)
      setPlayer(selectPlayer())

    }
  },[reset])
  const selectPlayer = ()=>{
    let prueba = Math.floor(Math.random()*2)+1
    if(prueba == 2){
      return "X"
    }else{
      return "O"
    }
  }
  return (
    <>
      <div className='content'>
          <div className='game'>
            <h1>3 en raya</h1>
            <h2 className='player'>Jugador: {player}</h2>
            <Numeral cells={cells} setCells={setCells} player={player} gameResult={gameResult}  ></Numeral>
            <div>
                <button className='buttons button--reset' onClick={()=>setReset(true)}>Reset</button>
            </div>
            
          </div>
          {
            ((gameResult == true)|| (count >9)) && <GameResult gameResult={gameResult} count={count} player={player} setReset={setReset} ></GameResult> 
          }
          {/* <GameResult gameResult={gameResult} count={count} player={player} setReset={setReset} ></GameResult> */}
      </div>
    </>
  )
}

export default App


