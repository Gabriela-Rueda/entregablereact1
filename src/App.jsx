import { useState } from 'react'
import reactLogo from './assets/react.svg'
import QuoteBox from './components/QuoteBox'
import Button from './components/Button'
import quotes from './quotes.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const colors = ['#1D61BD', '#008DDA', '#00B2D1','#00D1AD','#86EA84', '#8B1471', '#C22E67', '#E95B5A']
 const conColor = Math.floor(Math.random() * colors.length)
     document.body.style = `background : ${colors[conColor]}`;

  
const [number, setNumber] = useState(Math.floor(Math.random() * quotes.length))

const changenumber = () => {
setNumber(Math.floor(Math.random() * quotes.length))
}

  return (
    <div className="App">
      <div className='quote'>
      <QuoteBox number={number} sendColor={colors[conColor]} />
  <Button changenumber={changenumber} sendColor = {colors[conColor]}/>

  </div>
    </div>
  )
}

export default App
