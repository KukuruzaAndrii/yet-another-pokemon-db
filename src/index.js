import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './style.sass'
import './services/pokeapi-service'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
