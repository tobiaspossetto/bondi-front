import { useState } from 'react'
import './App.css'
import MapView from './components/MapView'
function App() {

  return (
    <div className="App">

      <h1>Find My Bondi</h1>
      <MapView position={[-31.424528037992335, -62.07158078019124]} />
    </div>

  )
}

export default App
