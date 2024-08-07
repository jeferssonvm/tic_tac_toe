const od =[
    {id:0,value:null},{id:1,value:null},{id:2,value:null},
    {id:3,value:null},{id:4,value:null},{id:5,value:null},
    {id:6,value:null},{id:7,value:null},{id:8,value:null},
  ]
  const positionSelector = (list)=>{
    const select = Math.floor(Math.random()*list.length)
    return list[select]
  }
  console.log(positionSelector([0,6,2,8]))
  let firstPlayer = true
  let movements  = 1;
  const cellsAvailable =(cell)=>{
    const prueba = cell.filter()
  }

  function pcMovements(){
    if (firstPlayer){
      if(movements=1){
        positionSelector([0,2,6,8])
      }
      if(movements=3){}
      if(movements=5){}
    }else{
      if(movements=2){}
      if(movements=4){}
      if(movements=6){}
    }
  }