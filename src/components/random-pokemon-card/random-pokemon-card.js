import React, { Component } from 'react'
import PokeapiService from '../../services/pokeapi-service'

export default class RandomPokemonCard extends Component {
  constructor () {
    super()
    this.updatePokemon()
  }

  state = {
    pokemon: {
      sprites: {},
      types: []
    }
  }

  render () {
    const { pokemon } = this.state
    console.log(pokemon)
    return (
      <div className='container'>
        <div className='box'>
          <PokemonCard pokemon={pokemon} />
        </div>
      </div>
    )
  }

  pokeapiService = new PokeapiService()

  onPokemonLoad = pokemon => this.setState({
    pokemon
  })

  updatePokemon () {
    const id = Math.round(Math.random() * 150) + 1
    this.pokeapiService.getPokemon(id).then(this.onPokemonLoad)
  }
}

const PokemonCard = ({ pokemon }) => (
  <article className='media'>
    <div className='media-left'>
      <figure className='image'>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </figure>
    </div>
    <div className='media-content'>
      <p>Random pokemon</p>
      <p className='content is-capitalized is-size-5 has-text-weight-medium'>
        {`#${pokemon.id} ${pokemon.name}`}
      </p>
      <p>
        Height: <span className='tag is-link is-light'>{pokemon.height}</span> dm
      </p>
      <p>
        Weight: <span className='tag is-link is-light'>{pokemon.weight}</span> hg
      </p>
      <p>
        Type: {pokemon.types.map(({ type: { name } }) => name).join(' ')}
      </p>
    </div>
  </article>
)
