import { useState, useEffect } from 'react'
import './styles/App.css'
import CharCard from "./components/CharCard"

function App() {
  const [characterList , setCharacterList] = useState([])

  useEffect(() => {
    console.log('Montou');
  }, [])

  return (
    <>
      <CharCard chars={characterList}/>
    </>
  )
}

export default App
