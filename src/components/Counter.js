import React from "react";
import { useEffect, useState } from "react";
import "./Counter.css";
function Counter({ trueCount, aces, setAces, setJackKing, jackKing, tenSev, setTenSev, setTwoSix, twoSix, decks, count, setDecks, setTrueCount, setCount }) {


    const [changed, setChanged] = useState(false)
    function handleChange(e) {
        setDecks(+e.target.value * 52)
        setTrueCount(0)
        setCount(0)
        setChanged(prev => !prev)

    } 

    useEffect(()=>{
        setTwoSix(((decks / 52 * 20)))
        setTenSev(((decks / 52 * 12)))
        setJackKing(((decks / 52 * 16)))
        setAces(((decks / 52 * 4)))
        
    },[changed])

    console.log(((twoSix / decks) * 100).toFixed(1))
  return (
    <div className="counter-container">
      <div className="title-div">
          <select onChange={handleChange}>
            <option value="0">
              Decks Amount
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        <h1 className="title">BlackJack Card Counter</h1>
        <p>Cards Left: {decks}</p>
      </div>
      <div className="grid">
        <div className="count-div">
          <p>Count</p>
          <p className="count-count">{count}</p>
        </div>
        <div className="true-count-div">
          <p>True Count</p>
          <p className="true-count-count">{trueCount}</p>
        </div>
        <div>
          <p>2-6</p>
          <p>{twoSix}: {isNaN(((twoSix / decks) * 100).toFixed(1)) ? 0 : ((twoSix / decks) * 100).toFixed(1)}%</p>
          <p>7-9</p>
          <p>{tenSev}: {isNaN(((tenSev / decks) * 100).toFixed(1)) ? 0 : ((tenSev / decks) * 100).toFixed(1)}%</p>
          <p>J-K</p>
          <p>{jackKing}: {isNaN(((jackKing / decks) * 100).toFixed(1)) ? 0 : ((jackKing / decks) * 100).toFixed(1)}%</p>
          <p>A</p>
          <p>{aces}: {isNaN(((aces / decks) * 100).toFixed(1)) ? 0 : ((aces / decks) * 100).toFixed(1)}%</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
