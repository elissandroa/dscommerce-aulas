import HeaderClient from '../../components/HeaderClient';
import ProductDetailsCard from '../../components/ProductDetailsCard';
import { ProductDTO } from '../../models/product';
import './styles.css';

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Televisor de alta definição",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories: [
    {
      id: 1,
      name: "Computadores"
    },
    {
      id: 2,
      name: "Eletrônicos"
    }
  ]
}

export default function ProductDetails() {
  return (
    <>
    <HeaderClient />
    <ProductDetailsCard product={product}/>
    </>
  )
}
