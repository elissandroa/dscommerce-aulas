import ProductDetailsCard from '../../../components/ProductDetailsCard';
import './styles.css';
import * as productService from '../../../services/product-service';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';





export default function ProductDetails() {

  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then(response => {
        setProduct(response.data);
      })
      .catch(() => {
        navigate('/');
      })
  }, [navigate, params.productId])


  return (
    <>
      {
        product && <ProductDetailsCard product={product} />
      }
    </>
  )
}
