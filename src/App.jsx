
import { useState } from 'react'
import './App.css'
import AllGuns from './Component/AllGuns/AllGuns'
import NavBar from './Component/Navbar/NavBar'
import Footer from './Component/Footer/Footer'

function App() {
 const [counts, setCounts ]= useState(0)
const countIncrease=()=>{
  setCounts(counts+1)
}
  return (
    <>
    <NavBar 
    counts={counts}
    ></NavBar>
    <AllGuns
     countIncrease={countIncrease}
    ></AllGuns>
    <Footer></Footer>
    </>
  )
}

export default App
