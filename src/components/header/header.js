import React, { Component } from 'react'
import logo from './bulbasaur-logo.svg'

export default class Header extends Component {
  state = {
    isMenuActive: false
  }

  handleMenuButton = () => this.setState(({ isMenuActive: ima }) => ({ isMenuActive: !ima }))

  render () {
    const { isMenuActive } = this.state
    const activeClassModifier = isMenuActive ? ' is-active' : ''
    return (
      <nav className='navbar is-warning' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <img src={logo} alt='logo' />
          </div>

          <div className='navbar-item is-size-4 has-text-danger has-text-weight-medium'>
            PoKeDb
          </div>

          <a
            role='button' className={'navbar-burger burger' + activeClassModifier} aria-label='menu'
            aria-expanded='false' href='#'
            data-target='navbarBasicExample'
            onClick={this.handleMenuButton}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='navbarBasicExample' className={'navbar-menu' + activeClassModifier}>
          <div className='navbar-start'>
            <a className='navbar-item' href='#'>
              Pokemons
            </a>

            <a className='navbar-item' href='#'>
              Types
            </a>
          </div>

        </div>
      </nav>
    )
  }
}
