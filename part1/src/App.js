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
      ...clicks,
      left: clicks.left+1,
      allClicks: clicks.allClicks.concat('L'),
      total:clicks.left+clicks.right
    }
    setclicks(newClicks)
  }
  const handleRightClick = () => {
    const newClicks ={
      ...clicks,
      right: clicks.right+1,
      allClicks: clicks.allClicks.concat('R'),
      total:clicks.left+clicks.right
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