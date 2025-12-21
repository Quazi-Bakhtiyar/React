import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const desc1 = {
      description: "this is new launch",
      img : "https://m.media-amazon.com/images/I/71f3BmjCwtL.jpg"
  }
  const desc2 = {
      description: "this is mega launch",
      img : "https://images.pexels.com/photos/10667519/pexels-photo-10667519.jpeg?cs=srgb&dl=pexels-alexasfotos-10667519.jpg&fm=jpg"
  }
  const desc3 = {
      description: "this is christmas launch",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9vdaGrzP7ADESHEWlo9nSX_8U0H1KHBGO0A&s"
  }
  return (
    <>
    
    <Card title="NIKE" desc={desc1}/>
    <Card title="Campus" desc={desc2}/>
    <Card title="BRitania" desc={desc3}/>
    </>
  )
}

export default App
