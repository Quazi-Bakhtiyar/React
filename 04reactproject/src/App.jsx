import './App.css'

function App() {

  function colorChanger(color){
    const body = document.body.style.backgroundColor = color
  }
  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 bg-gray-200 p-4 rounded-lg flex justify-evenly items-center">
        <button className = "bg-red-500 text-white rounded-lg border-none m-2 px-2 py-2" onClick={() => colorChanger("red")}
>Red</button>
        <button className = "bg-green-500 text-white rounded-b-xl border-none m-2 px-2 py-2" onClick={() => colorChanger("green")}>Green</button>
        <button className = "bg-yellow-500 text-white rounded-lg border-none m-2 px-2 py-2" onClick={() => colorChanger("yellow")}>Yellow</button>
        <button className = "bg-blue-500 text-white rounded-lg border-none m-2 px-2 py-2" onClick={() => colorChanger("blue")}>Blue</button>
        <button className = "bg-violet-500 text-white rounded-lg border-none m-2 px-2 py-2" onClick={() => colorChanger("violet")}>Violet</button>
        <button className = "bg-orange-500 text-white rounded-lg border-none m-2 px-2 py-2" onClick={() => colorChanger("orange")}>Orange</button>
        <button className = "bg-purple-500 text-white rounded-lg border-none m-2 px-2 py-2" onClick={() => colorChanger("purple")}>Purple</button>
        <button className = "bg-black text-white rounded-lg border-none m-2 px-2 py-2" onClick={() => colorChanger("black")}>Black</button>
      </div>
    </>
  )
}

export default App
