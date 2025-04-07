
import { Suspense } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players'

const fetchPlayers= async ()=>{
  const res= await fetch('cricketers.json')
  return res.json()
}
function App() {
  const playersPromise=fetchPlayers()

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Suspense fallback={<h2 className='text-center'>Cricketers data is Loading....</h2>}>
      <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
