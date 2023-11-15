import CatalogCard from '../../../components/CatalogCard';
import { ProductDTO } from '../../../models/product';
import './styles.css';

export default function Catalog() {
  const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "Televisor de alta definição",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
    price: 5000.00,
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
  
  return (
    <>
       <CatalogCard product={product} />
    </>
  )
}
