
import { Route, Routes } from 'react-router-dom'
import Catalog from '../pages/Catalog/Catalog.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import './App.css'
import NotFound from '../pages/NotFound/NotFound.jsx'
import Layout from './Layout/Layout.jsx'

function App() {


  return (
    <>
    
     <div>
      <Routes>
        
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<NotFound />} />
      
      </Routes>
    </div>
    </>
  )
}

export default App
