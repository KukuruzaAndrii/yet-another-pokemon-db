import React, { Component } from 'react'
// import '../../'
import Header from '../header'
import RandomPokemonCard from '../random-pokemon-card'
// import PokemonList from '../pokemon-list'

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <RandomPokemonCard />
      </div>
    )
  }
}
