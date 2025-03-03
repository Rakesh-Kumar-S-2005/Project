import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigate from './Component/SearchBar.jsx'
import Home from './Component/Home.jsx'
import AddToCart from './Component/AddToCart.jsx'
import DisplayDetails from './Component/DetailePage.jsx'
import Orders from './Component/Order.jsx'
function App() {
  return (
    <div >
      <Navigate/>
      <Routes>
        <Route index path="" element={<Home />}/>
        <Route path="Add_To_Cart" element={<AddToCart/>}/>
        <Route path="Product" element={<DisplayDetails/>}/>
        <Route path="Orders" element={<Orders/>}/>
      </Routes>
    </div>
  )
}

export default App
