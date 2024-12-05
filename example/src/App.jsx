import { useState } from 'react'
import './App.css'
import './form.css'

import ShowProduct from './components/ShowProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import NavBar from './components/NavBar'
import ProductDetail from './components/ProductDetail'
import UpdateProduct from './components/UpdateProduct'

function App() {
  const [count, setCount] = useState(0)
return(
  <div className="app-container">
    <Router>
    <NavBar/>
   
    <Routes>
   
      <Route path='/' element={<ShowProduct />} />
    
      <Route path='/add' element={<AddProduct/>}/>
      
      <Route path='/:id/' element={<ProductDetail/>}/>
      
      <Route path='/:id/update' element={<UpdateProduct/>}/>

    </Routes>
  
    </Router>
  </div>
  )
}

export default App
