import { useState, useEffect } from 'react'
import './styles/App.css'
import Header from "./components/Header"
import CharCard from "./components/CharCard"
import Footer from "./components/Footer"

function App() {
  const [characterList , setCharacterList] = useState([])

  useEffect(() => {
    console.log('Montou');

    async function getAllCharacters() {
      try {
        const request = await fetch(`https://rickandmortyapi.com/api/character/`)

        let response = await request.json()
        
        setCharacterList(response.results)

        return response

      } catch (error) {
        console.log(error)
      }
    }

    getAllCharacters()
    
  }, [])

  return (
    <>
      <Header/>
      <CharCard chars={characterList}/>
      <Footer/>
    </>
  )
}

export default App
