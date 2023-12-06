import './styles.css';
import * as productService from '../../../services/product-service';
import SearchBar from '../../../components/SearchBar';
import ButtonNextPage from '../../../components/ButtonNextPage';
import ProductCard from '../../../components/ProductCard';
import { useState, useEffect } from 'react';
import { ProductDTO } from '../../../models/product';
export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);



  useEffect(() => {
    productService.findAll()
      .then(response => {
        setProducts(response.data.content);
      });

  }, [])

  return (
    <>
      <main>
        <section id="dsc-catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {
              products.map(product => (

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
