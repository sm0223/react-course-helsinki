import { useState } from 'react';

const App = () => {
  const [clicks, setclicks] = useState({
    left:0,
    right:0,
    allClicks:[],
    total:0
  })
  const handleLeftClick = () => {
    const newClicks ={
      ...clicks, //copy previous and update the ones which are needed.
      updatedClicks = clciks.left +1,
      left: updatedClicks,
      allClicks: clicks.allClicks.concat('L'),
      total:updatedClicks+clicks.right
    }
    setclicks(newClicks)
  }
  const handleRightClick = () => {
    const newClicks ={
      ...clicks,
      updatedClicks = clciks.right +1,
      right: updatedClicks,
      allClicks: clicks.allClicks.concat('R'),
      total:clicks.left+updatedClicks
    }
    
    setclicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>Left</button>
      {clicks.right}
      <button onClick={handleRightClick}>Right</button>
      <p>{clicks.allClicks}</p>
      <p>total {clicks.total}</p>
      
    </div>
  )
}
export default App;