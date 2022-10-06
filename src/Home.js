import React from 'react'
import TwoToSix from './components/TwoToSix'
import TenToSeven from './components/TenToSeven'
import JToK from './components/JToK'
import A from './components/A'
import Counter from './components/Counter'
import { useState } from 'react'
import './Home.css'
function Home() {

    const [trueCount, setTrueCount] = useState(0)
    const [count, setCount] = useState(0)
    const [decks, setDecks] = useState(0)
    const [twoSix, setTwoSix] = useState(0)
    const [tenSev, setTenSev] = useState(0)
    const [jackKing, setJackKing] = useState(0)
    const [aces, setAces] = useState(0)

    let twoToSix = ['2', '3', '4', '5', '6']
    let sevToTen = ['7', '8', '9']
    let jToK = ['10', 'J', 'Q', 'K']
  return (
      <>
        <Counter aces={aces} setAces={setAces} jackKing={jackKing} setJackKing={setJackKing} tenSev={tenSev} setTenSev={setTenSev}  twoSix={twoSix} setTwoSix={setTwoSix} setCount={setCount} decks={decks} setTrueCount={setTrueCount} setDecks={setDecks} count={count} trueCount={trueCount}/>
    <div className='bj-container'>
        <div className='two-six-container'>
        {twoToSix.map((el, i) => {
            return <TwoToSix twoSix={twoSix} setTwoSix={setTwoSix} decks={decks} count={count} setDecks={setDecks} setCount={setCount} setTrueCount={setTrueCount} num={el} key={i}/>
        })}
        </div>
        <div className='ten-seven-container'>

        {sevToTen.map((el, i) => {
            return <TenToSeven tenSev={tenSev} setTenSev={setTenSev} decks={decks} count={count} setDecks={setDecks} setTrueCount={setTrueCount} num={el} key={i}/>
        })}
        </div>
        <div className='j-a-container'>
            
        {jToK.map((el, i) => {
            return <JToK setJackKing={setJackKing} count={count} setDecks={setDecks} decks={decks} setCount={setCount} setTrueCount={setTrueCount} num={el} key={i}/>
        })}
        </div>
        <div className='a'>
        <A setAces={setAces} setCount={setCount} setDecks={setDecks} count={count} decks={decks} setTrueCount={setTrueCount}/>

        </div>
    </div>
      </>
  )
}

export default Home
