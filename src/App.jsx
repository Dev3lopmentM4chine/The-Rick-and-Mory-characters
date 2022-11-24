import { useState } from 'react'
import './styles/App.css'
import CharCard from "./components/CharCard"

function App() {
  const [char, setChar] = useState([])

  return (
    <>
      <CharCard chars={char}/>
    </>
  )
}

export default App
