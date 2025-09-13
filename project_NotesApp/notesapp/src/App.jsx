import { useState } from 'react';
import Input from './components/Input/Input';
import Show from './components/Show/Show'

function App() {

  const[createNote,setCreateNote] = useState(false)
  const [text,setText] = useState("")
  const[show,setShow] = useState(false)

  function ShowFn(){
    setShow(true)
    setCreateNote(false)
  }

  function NoteFn(){
    setCreateNote(true)
    setShow(false)
    setText("")
  }

  return (
    <>
      <div className="flex justify-left items-left text-5xl m-3 p-4 font-bold text-red-500">
        <label> NotesApp </label>
      </div>

      <div className="flex justify-center items-center p-8 gap-24 flex-wrap">
        <button onClick = {()=>NoteFn()} className="cursor-pointer bg-green-500 p-7 rounded-3xl text-white text-3xl">Create Note</button>
        <button className="bg-green-500 p-7 rounded-3xl cursor-pointer text-white text-3xl"
        onClick={()=>ShowFn()}
        >Show Notes</button>
      </div>

      {createNote && <Input text={text} setText={setText}/>}
      {show && <Show />}
    </>
  )
}

export default App
