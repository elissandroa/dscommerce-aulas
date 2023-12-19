import './styles.css';
import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";
import ProductCategory from '../ProductCategory';
import { ProductDTO } from '../../models/product';
import { Link, useNavigate } from 'react-router-dom';
import * as cartService from '../../services/cart-service';
import { useContext } from 'react';
import { ContextCartCount } from '../../utils/context-cart';

type Props = {
  product: ProductDTO;
}


export default function ProductDetailsCard({ product }: Props) {
  const navigate = useNavigate();

  const { setContextCartCount } = useContext(ContextCartCount);

  function handleBuyClick() {
    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate('/cart');
    }
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
