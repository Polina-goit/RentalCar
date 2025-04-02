
import { Route, Routes } from 'react-router-dom'
import Catalog from '../pages/Catalog/Catalog.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import './App.css'
import NotFound from '../pages/NotFound/NotFound.jsx'
import NavBar from './NavBar/NavBar.jsx'


import CarCard from '../pages/Car/CarCard.jsx'


function App() {
  

  return (
    <>
    
     <div><NavBar/>
     
      <Routes>
        
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarCard />} />
        <Route path="*" element={<NotFound />} />
      
      </Routes>
     
    </div>
    </>
  )
}

export default App
