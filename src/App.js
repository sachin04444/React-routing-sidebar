import "./index.css"
import Home from "./Home"
import About from "./About";
import Product from "./Product";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
 
    <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/About" element={<About/> }/>
    <Route  path="/Product" element={<Product/>}/>
    </Routes>
  )

}

export default App


