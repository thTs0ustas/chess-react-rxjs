import React from 'react'
import Game from './components/Game'
import './App.css'
import BasicLayout from './layout/basicLayout/BasicLayout'
import Aside from './components/History/Aside'


function App({ }) {
  return (
    <BasicLayout>
      <Game />
      <Aside />
    </BasicLayout>
  )
}

export default App