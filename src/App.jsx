import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players'
import AvailablePlayers from './components/availablePlayers/AvailablePlayers'
import SelectedPlayers from './components/selectedPlayers/SelectedPlayers'
import { ToastContainer, toast,Zoom } from 'react-toastify';

function App() {
  const [players, SetPlayers] = useState([])
  const [loading, setLoading] = useState(false)
  const [claimCoin, setClaimCoin] = useState(0)
  const [selected, setSelected] = useState(0)
  const [activeBtn, setActiveBtn] = useState(true)
  const [addPlayer, setAddPlayer] = useState([])

  // fetch data by use effect
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

  // add player (display in select option)
  const handleAddPlayer = (player) => {
    const newPlayer = [...addPlayer, player]
    setAddPlayer(newPlayer)
    toast.success("You Selected Player",{
      autoClose: 1000,
      theme:'colored'
    });
  }

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
            players={players}
            handleAddPlayer={handleAddPlayer}
          ></Players>
        )
      }

      {
        activeBtn === false && (
          addPlayer.map(player => <SelectedPlayers key={player.id} player={player}></SelectedPlayers>)
        )

      }
        <ToastContainer transition={Zoom} position="top-center"/>
    </>
  )
}
export default App
