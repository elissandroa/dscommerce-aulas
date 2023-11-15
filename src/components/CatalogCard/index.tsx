import './styles.css';
import SearchBar from '../SearchBar';
import ProductCard from '../ProductCard';
import ButtonNextPage from '../ButtonNextPage';
import { ProductDTO } from '../../models/product';

type Props = {
  product: ProductDTO;
}

export default function CatalogCard({ product }: Props) {
  return (
    <main>
    <section id="dsc-catalog-section" className="dsc-container">
      <SearchBar />
      <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
        <ProductCard price= {product.price} name={product.name} imgUrl={product.imgUrl}  />
        <ProductCard price= {product.price} name={product.name} imgUrl={product.imgUrl}/>
        <ProductCard price= {product.price} name={product.name} imgUrl={product.imgUrl}/>
        <ProductCard price= {product.price} name={product.name} imgUrl={product.imgUrl}/>
        <ProductCard price= {product.price} name={product.name} imgUrl={product.imgUrl}/>
        <ProductCard price= {product.price} name={product.name} imgUrl={product.imgUrl}/>
        <ProductCard price= {product.price} name={product.name} imgUrl={product.imgUrl}/>
        <ProductCard price= {product.price} name={product.name} imgUrl={product.imgUrl}/>
        <ProductCard price= {product.price} name={product.name} imgUrl={product.imgUrl}/>
        <ProductCard price= {product.price} name={product.name} imgUrl={product.imgUrl}/>
        <ProductCard price= {product.price} name={product.name} imgUrl={product.imgUrl}/>
      </div>
      <ButtonNextPage />
    </section>
  </main>
  )
}
