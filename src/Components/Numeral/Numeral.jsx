import React from 'react'
import "./Numeral.css"
export const Numeral = ({cells, setCells,player, gameResult}) => {
  const changeXO =(value)=>{
    setCells(cells.map(cell => (cell.id === value? {id:cell.id, value:player}: {id:cell.id, value:cell.value})))
  }

  return (
    <div className='Content-Numeral'>
      
      <div className='Numeral'>
        {
          cells.map(cell => {
            return <button className='cell' onClick={()=>changeXO(cell.id)} disabled ={(cell.value !== null) || gameResult} key={cell.id}>
                    {cell.value} 
              </button>
          })
        }
      </div>
    </div>
  )
}
