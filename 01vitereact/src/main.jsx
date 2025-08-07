import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>Custom React App</div>
  )
}

// const ReactElement = {
//     type:"a",
//     props:{
//         href:"https://www.google.com",
//         target:'_blank'
//     },
//     children: 'Click me to visit Google'
// }

const anotherElement = ( 
<a href = "https://www.google.com" target="_blank">Visit Google</a> 
)

const anotherUser = "Chai aur React"

const reactElement  = React.createElement(
    'a',
    {
      href:"https://www.google.com",
      target:"_blank"
    },
    "click me to visit Google.com",
    anotherUser
)

ReactDom.createRoot(document.getElementById('root')).render(
  reactElement
)
