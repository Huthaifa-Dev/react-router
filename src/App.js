import { Route, Routes, Navigate } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to='/welcome' />} exact />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} exact />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
