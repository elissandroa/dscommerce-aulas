import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import Catalog from "./routes/ClientHome/Catalog";
import ClientHome from "./routes/ClientHome";
import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ClientHome />} >
          <Route index element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path='/product-details/:productId' element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'}/>} />
      </Routes>
    </Router>
  )
}
