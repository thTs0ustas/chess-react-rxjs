import React, { useReducer, useEffect } from "react";
import Moves from "./Moves";
import PiecesWon from "./PiecesWon";


const initState = { moves: [], piecesWon: {} }

const reducer = (state, action) => {

}


const Aside = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(props)
  return (
    <div className='aside'>
      <PiecesWon />
      <Moves />
    </div>
  )
}

export default Aside