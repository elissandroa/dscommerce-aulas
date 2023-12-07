import './styles.css';
import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";
import ProductCategory from '../ProductCategory';
import { ProductDTO } from '../../models/product';
import { Link, useNavigate } from 'react-router-dom';
import * as cartService from '../../services/cart-service';

type Props = {
  product: ProductDTO;
}


export default function ProductDetailsCard({ product }: Props) {
const navigate = useNavigate();

  function handleBuyClick (){
    cartService.addProduct(product);
    navigate('/cart');
  }

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
                  <ProductCategory key={item.id} name={item.name} />
                ))
              }
            </div>
          </div>
        </div>
        <div className="dsc-btn-page-container">
          <div onClick={handleBuyClick} >
            <ButtonPrimary text='Comprar' />
          </div>
          <Link to={'/'}>
            <ButtonInverse text='Início' />
          </Link>

        </div>
      </section>
    </main>
  )
}
