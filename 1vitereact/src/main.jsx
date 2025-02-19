import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <p>hello this is Isha</p>
        </div>
    )
}

// const reactElement ={
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : 'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)

const reactEle = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'cleck here to visit google'
)
createRoot(document.getElementById('root')).render(
    reactEle
 
)
