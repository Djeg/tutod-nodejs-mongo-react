import React, { useState } from 'react'
import { render } from 'react-dom'
import './style.scss'
import 'regenerator-runtime/runtime'

const App = () => (
  <div className='loading-stole'>
    <div className='stole stole--left'></div>
    <div className='stole stole--right'></div>
    <div className='loader'>
      <div className='spinner-item'></div>
      <div className='spinner-item'></div>
    </div>
  </div>
)

render(<App />, document.querySelector('main'))
