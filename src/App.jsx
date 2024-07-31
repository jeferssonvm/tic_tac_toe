import './reset.css'
import { useEffect, useState } from 'react'
import './App.css'


import { Numeral } from './Components/Numeral/Numeral'

function App() {
  const [count, setCount] = useState(0)
  const [ player , setPlayer] = useState("X")
  const [cells, setCells] = useState([
    {id:0,value:null},{id:1,value:null},{id:2,value:null},
    {id:3,value:null},{id:4,value:null},{id:5,value:null},
    {id:6,value:null},{id:7,value:null},{id:8,value:null},
  ])
  useEffect(()=>{
    setPlayer(player==="X"? "O":"X")
  },[cells]);
  return (
      <div className='content'>
        <h1>3 en raya</h1>
        <h2>{player}</h2>
        <Numeral cells={cells} setCells={setCells} player={player} ></Numeral>
        <div>
            <button className='buttons'>Jugar</button>
        </div>
      </div>
  )
}

export default App


// <style>
// @import url('https://fonts.googleapis.com/css2?family=Ga+Maamli&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
// </style>

// .ga-maamli-regular {
//   font-family: "Ga Maamli", sans-serif;
//   font-weight: 400;
//   font-style: normal;
// }
