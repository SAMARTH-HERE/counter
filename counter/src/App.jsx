import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [value,setValue] = useState(10)

 const Add=()=>{
  value=value+1;
  setValue(value)
  console.log("value is added and current value is" ,{value} )
 }

 const Sub=()=>{
  value=value-1;
  setValue(value)
  console.log("value is subtracted and current value is" ,{value} )
 }

  return (
    <div class='counterbg'>
    <h1>THIS IS A COUNTER APP </h1>
    <h2>THE CURRENT VALUE :   {value}</h2>
    <button onClick={Add}>CLICK THIS BUTTON TO ADD BY 1 </button>
    <br />
    <br />
    <button onClick={Sub}>CLICK THIS BUTTON TO SUB BY 1 </button>
      
    </div>
  )
}

export default App
