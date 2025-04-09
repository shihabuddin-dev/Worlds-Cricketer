
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players'
import AvailablePlayers from './components/availablePlayers/AvailablePlayers'
import SelectedPlayers from './components/selectedPlayers/SelectedPlayers'


function App() {
  const [players, SetPlayers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchPlayers = async () => {
      const res = await fetch("cricketers.json")
      const result = await res.json()
      SetPlayers(result)
    }
    fetchPlayers()
    setLoading(false)
  }, [])


  // const playersPromise = fetchPlayers()
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
        !loading && activeBtn === true && (
          <Players
            handleSelectedPlayers={handleSelectedPlayers}
            players={players}></Players>
        )
      }

      {
        activeBtn === false && (<SelectedPlayers></SelectedPlayers>)

      }
    </>
  )
}
export default App
