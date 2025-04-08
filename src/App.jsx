
import { Suspense, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players'
import AvailablePlayers from './components/availablePlayers/AvailablePlayers'
import SelectedPlayers from './components/selectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch('cricketers.json')
  return res.json()
}

function App() {
  const playersPromise = fetchPlayers()
  const [claimCoin, setClaimCoin] = useState(0)
  const [selected, setSelected] = useState(0)
  const [activeBtn, setActiveBtn] = useState(true)
  // claim coin
  const handleClaimCoin = () => {
    setClaimCoin(claimCoin + 100000)
  }
  // selected players count
  const handleSelectedPlayers = () => {
    setSelected(selected + 1)
  }
  return (
    <>
      <Navbar claimCoin={claimCoin}></Navbar>
      <Header handleClaimCoin={handleClaimCoin}></Header>
      <AvailablePlayers
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        selected={selected}></AvailablePlayers>
      {
        activeBtn === true && (<Suspense fallback={<h2 className='text-center'>Cricketers data is Loading....</h2>}>
          <Players
            handleSelectedPlayers={handleSelectedPlayers}
            playersPromise={playersPromise}></Players>
        </Suspense>)
      }
      {
        activeBtn === false && (<SelectedPlayers></SelectedPlayers>)

      }
    </>
  )
}

export default App
