import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import PrivateRoute from "./components/PrivateRoute";




function App() {

  return (
    <>
      <h1>Ola</h1>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
