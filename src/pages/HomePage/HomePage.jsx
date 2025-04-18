import React from 'react'
import css from "./HomePage.module.css"
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar.jsx'

const HomePage = () => {
  return (<main>
  
    <section className={css.section}>
       <div className={css.container}> <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.subtitle}>Reliable and budget-friendly rentals for any journey</p>
        <Link className={css.button} to="catalog">
        View Catalog
      </Link>
      </div>
      </section>
      </main> )
}

export default HomePage