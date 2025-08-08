import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">This is tailwind CSS</h1>
      
      <div className="flex items-center">
        <Card username="Quazi Bakhtiyar Ali" btnText = "Click Me"/>
      
        <Card username="unknown" btnText = "Visit Us" />
      </div>
      
    
        

    </>
  )
}

export default App
