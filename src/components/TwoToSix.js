import React from 'react'
import './TwoToSix.css'
function TwoToSix({num, count, setTwoSix, setTrueCount, decks, setCount, setDecks}) {
  function handleClick() {
    if(decks > 0) {
      setCount(prev => prev + 1)
      setDecks(prev => prev - 1)
      setTrueCount((count / (decks / 52)).toFixed(1))
      setTwoSix(prev => prev - 1)
    }
  }
  return (
    <div onClick={handleClick} className='two-six-each'>
      <p className='num'>{num}</p>
    </div>
  )
}

export default TwoToSix;
