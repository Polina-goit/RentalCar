import React from 'react'
import { NavLink } from 'react-router-dom'
import css from "./NavBar.module.css"
const NavBar = () => {
  return (

    <header className={css.header}>
 <NavLink to="/">
        <svg width="104" height="16">
          <use href="/icons.svg#icon-logo"></use>
        </svg>
      </NavLink>
      <nav className={css.nav}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar