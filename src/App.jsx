import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Comp1 from './comp1'

function App() {
  const [count, setCount] = useState(0)

  let a = 4
  let b = 8


  return (
    <>
      <p>app---------  {a}</p>

      <Comp1 num={a}></Comp1>




    </>
  )
}

export default App
