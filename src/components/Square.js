import React from 'react';

export default function Square({children, black}) {
  const bg = black ? 'square-black':'square-white'
  return <div className={`${bg} board-square`}>{children}</div>;
}