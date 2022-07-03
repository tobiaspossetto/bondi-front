import { useState } from 'react'


import MapView from './components/MapView'
function App() {

  const [positionX, setPositionX] = useState( [-31.42528037992335, -62.07158078019124])
  function mover(lat,long){
    setPositionX([lat+0.0001,long])
    console.log(positionX)
  }
  return (
    <div className="App">
      <button onClick={() => mover(positionX[0],positionX[1])}> mover </button>
  <MapView position={positionX}/>
    </div>
  
  )
}

export default App
