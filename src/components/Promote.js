import React from "react";
import Square from "./Square";
import {move} from '../rxjs/Game'

const promotionPieces = ['r', 'n', 'b', 'q']

const Promote = ({promotion: {from, to, color}}) => {
  return (
    <div className={'board'}>
      {promotionPieces.map((p, i) => (
        <div className={'promote-square'} key={i} onClick = {()=>move(from,to,p)}>
          <Square black={i%3===0}>
            <div>
              <img
                src={require(`../assets/${p}_${color}.png`)}
                alt=''
                className={'piece cursor-pointer'}
              />
            </div>
          </Square>
        </div>
      ))}
    </div>)
}

export default Promote