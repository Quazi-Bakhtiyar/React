import React from 'react'
import {useState} from 'react'

function Input({text,setText}) {

    const[message,setMessage] = useState("")

    function saveNote(){
        localStorage.setItem("notes", text)
        setMessage("Notes Saved Successfully")
        setTimeout(()=>setMessage(""),2000)
    }

  return (
    <>
      <div className="flex flex-col items-center p-6">
        {message && <p className="text-2xl text-white">{message}</p>}
        <div className="text-red-500 text-3xl mb-6">Welcome - Create Your Note:</div>

        <textarea
        value={text}
        onChange={(e)=>setText(e.target.value)}
        className="text-green-500 text-3xl w-[40rem] h-60 rounded-3xl border-2 mb-6 p-4"
        id="input"
        name="input"
        />

        <button 
        onClick={()=>{saveNote()}}
        className="cursor-pointer p-4 rounded-3xl w-44 bg-red-500 text-green-500">
          Save
        </button>
      </div>
    </>
  )
}

export default Input
