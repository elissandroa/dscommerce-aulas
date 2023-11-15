import ProductDetailsCard from '../../../components/ProductDetailsCard';
import './styles.css';
import * as productService from '../../../services/product-service';
import { useParams } from 'react-router-dom';




export default function ProductDetails() {
  const params = useParams();
  const product = productService.findById(Number(params.productId)); 
 
  return (
    <>
    {
       product &&  <ProductDetailsCard product={product}/>
    }
    </>
  )
}
