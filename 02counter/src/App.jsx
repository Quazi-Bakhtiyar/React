import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(15)

  function addValue(){
    if(counter == 20){
      alert("value can't be more than 20")
    }else{

      // react interview question 

      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
    }
    
  }

  const removeValue = ()=>{
    if(counter == 0){
      alert("value can't be less than 0")
    }else{  
      setCounter(counter-1)
    }
    
  }
  return (
    <> 
    <h1>Chai Aur React </h1> 
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br /> <br></br>
    <button
    onClick={removeValue}
    >Remove Value {counter}</button>
    <br />
    <footer>footer: {counter}</footer>
    </>
  )
}

export default App
