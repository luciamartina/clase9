import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import EditarProducto from './pages/EditarProducto';
import CargarProducto from './pages/CargarProducto';
import Error404 from './pages/Error404';
import Navbar from './component/Navbar';
import { ProductosProvider } from "./context/ProductosContext";

function App() {
  return (
    <ProductosProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cargarProducto" element={<CargarProducto />} />
          <Route path="/editarProducto/:id" element={<EditarProducto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ProductosProvider>
  );
}

export default App;
