
import { Suspense, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players'
import AvailablePlayers from './components/availablePlayers/AvailablePlayers'

const fetchPlayers = async () => {
  const res = await fetch('cricketers.json')
  return res.json()
}

function App() {
  const playersPromise = fetchPlayers()
  // selected players count
  const [selected, setSelected] = useState(0)
  const handleSelectedPlayers = () => {
    setSelected(selected + 1)
  }
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <AvailablePlayers selected={selected}></AvailablePlayers>
      <Suspense fallback={<h2 className='text-center'>Cricketers data is Loading....</h2>}>
        <Players
          handleSelectedPlayers={handleSelectedPlayers}
          playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
