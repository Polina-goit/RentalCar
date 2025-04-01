import React from 'react'
import { NavLink } from 'react-router-dom'
import css from "./NavBar.module.css"
const NavBar = () => {
  return (

    <header className={css.header}>
<NavLink to="/">
        <h2 className={css.logo}>RentalCar</h2>
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