export default class PokeapiService {
  #apiBase = 'https://pokeapi.co/api/v2'

  #getResource = async url => {
    const res = await window.fetch(`${this.#apiBase}${url}`)
    if (!res.ok) {
      throw new Error(`On fetch ${url} received ${res.status}`)
    }
    return res.json()
  }

  getAllPokemons = async () => {
    const res = await this.#getResource('/generation/1')
    return res.pokemon_species
  }

  getPokemon = async id => {
    return this.#getResource(`/pokemon/${id}`)
  }

  getAllTypes = async () => {
    const res = await this.#getResource('/generation/1')
    return res.types
  }

  getType = async id => {
    return this.#getResource(`/type/${id}`)
  }
}
