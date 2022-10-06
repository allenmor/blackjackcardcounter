import React from 'react'
import './TenToSeven.css'
function TenToSeven({num, setTenSev, setDecks, decks, count, setTrueCount}) {
    function handleClick() {
        if(decks > 0){
            setDecks(prev => prev - 1)
            setTrueCount((count / (decks / 52)).toFixed(2))
            setTenSev(prev => prev - 1)
        }
    }
  return (
    <div onClick={handleClick} className='ten-seven-each'>
        <p className='ten-num'>{num}</p>
    </div>
  )
}

export default TenToSeven