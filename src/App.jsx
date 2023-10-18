
import ItemDetailContainer from "./components/itemDeatilContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/carrito/Carrito";
import Checkout from "./components/checkout/Checkout";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/category/:categoria" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider> 
      <Footer/>
    </>
  );
}

export default App;