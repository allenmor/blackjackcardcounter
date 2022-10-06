import React from 'react'
import './JToK.css'
function JToK({num, setJackKing, setTrueCount, setCount, setDecks, decks, count}) {

  function handleClick() {
    if(decks > 0) {

      setCount(prev => prev - 1)
      setDecks(prev => prev - 1)
      setTrueCount((count / (decks / 52)).toFixed(1))
      setJackKing(prev => prev - 1)
    }
  }
  return (
    <div onClick={handleClick} className='j-a-each'>
      <p className='j-k-num'>{num}</p>
    </div>
  )
}

export default JToK
