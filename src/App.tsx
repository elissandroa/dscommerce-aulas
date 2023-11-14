import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import ProductDetails from './routes/ProductDetails';
import Catalog from './routes/Catalog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/productDetails' element={<ProductDetails />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
    </Router>
  )
}

export default App
