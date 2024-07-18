import Navbar from "./Components/Navbar/Navbar.jsx";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// web page imports
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";

function App() {

  return(
    <>
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>

      <Route exact path="/" element={<Shop />} />
      <Route exact path="/mens" element={<ShopCategory  category="men"/>} />
      <Route exact path="/womens" element={<ShopCategory  category="women"/>} />
      <Route exact path="/kids" element={<ShopCategory  category="kid"/>} />

      <Route path="/product" element={<Product/>}>

       <Route path=":productId" element={<Product/>} />

      </Route>

      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/login" element={<LoginSignup />} />

      
     
    </Routes>

    </BrowserRouter>
 
   </div>


    </>


  );


}

export default App;
