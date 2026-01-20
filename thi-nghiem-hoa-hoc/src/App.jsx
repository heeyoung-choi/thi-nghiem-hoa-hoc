import { useState } from 'react'
import WhiteVial from './assets/white-vial.svg?react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <WhiteVial width="200" height="200" />
      <WhiteVial width="200" height="200" />
    </div>
  )
}

export default App;
