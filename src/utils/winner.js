function winner(play, getCells ){
    console.log("winner",play)
    const  positionPlayer = getCells.filter((value)=>{
      return (value.value  === play)
    })
    
    if(positionPlayer.length>=3){
        const result = positionWinner(positionPlayer)
        return result   
    }
}

  const positionWinner=(cellPlayer)=>{
    // definimos las posiciones ganadoras
    const threeInRow =[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6], [1,4,7], [2,5,8] ] 
    let cellPlayerList =[]
    let isWin = false
    //convertimos el objeto que nos dice donde seleciono el jugador y lo combierte en un array para poder compararlo
    cellPlayer.map(value =>{
      cellPlayerList =[...cellPlayerList,value.id]
  
    })
    
    // verifica si al menos una de las combinaciones tiene todos sus elementos
    isWin = threeInRow.some(winCombination=>{
      //Verifica si todos los elementos de una combinación están presentes
      return winCombination.every(index =>{
        return cellPlayerList.includes(index)
      })
    })
    
    return isWin
    
    
  }
  export default winner;