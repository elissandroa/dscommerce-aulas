import './styles.css';
import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";
import ProductCategory from '../ProductCategory';
import { ProductDTO } from '../../models/product';

type Props = {
  product: ProductDTO;
}


export default function ProductDetailsCard({ product }:Props) {
      
  return (
    <main>
    <section id="product-details-section" className="dsc-container">
    <div className="dsc-card  dsc-mb20">
      <div className="dsc-product-details-top dsc-line-bottom">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="dsc-product-details-bottom">
        <h3>R$ {product.price.toFixed(2)}</h3>
        <h4>{product.name}</h4>
        <p>
          {product.description}
        </p>
        <div className="dsc-category-container">
          {
            product.categories.map(item => (
              <ProductCategory key={item.id} name={item.name}/>
            ))
          }
        </div>
      </div>
    </div>
    <div className="dsc-btn-page-container">
        <ButtonPrimary text='Comprar' />
        <ButtonInverse text='Início' />
    </div>
  </section>
  </main>
  )
}
