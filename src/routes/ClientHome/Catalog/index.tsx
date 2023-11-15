import './styles.css';
import * as productService from '../../../services/product-service';
import SearchBar from '../../../components/SearchBar';
import ButtonNextPage from '../../../components/ButtonNextPage';
import ProductCard from '../../../components/ProductCard';

export default function Catalog() {

  return (
    <>
      <main>
        <section id="dsc-catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {
              productService.findAll().map(product => (

                <ProductCard key={product.id} product={product} />
              ))
            }
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  )
}
