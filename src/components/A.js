import React from 'react'
import './A.css'
function A({setTrueCount, setAces, setCount, count, decks, setDecks}) {
    function handleClick() {
        if(decks > 0) {
            setCount(prev => prev - 1)
            setDecks(prev => prev - 1)
            setTrueCount((count / (decks / 52)).toFixed(1))
            setAces(prev => prev - 1)
        }
    }
  return (
    <div onClick={handleClick} className='a-each'>
        <p className='a-num'>A</p>
    </div>
  )
}
export default A
