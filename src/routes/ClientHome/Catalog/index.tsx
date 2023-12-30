/* eslint-disable react-hooks/exhaustive-deps */
import './styles.css';
import * as productService from '../../../services/product-service';
import SearchBar from '../../../components/SearchBar';
import ButtonNextPage from '../../../components/ButtonNextPage';
import ProductCard from '../../../components/ProductCard';
import { useState, useEffect } from 'react';
import { ProductDTO } from '../../../models/product';

type Queryparams = {
  page: number;
  name: string;
}

export default function Catalog() {

  const [queryParams, setQueryParams] = useState<Queryparams>({
    page: 0,
    name: ""
  });
  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);




  useEffect(() => {
    productService.findPageRequest(queryParams.page, queryParams.name)
      .then(response => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });

  }, [queryParams])

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 })
  }

  

  return (
    <>
      <main>
        <section id="dsc-catalog-section" className="dsc-container">
          <SearchBar onSearch={handleSearch} />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {
              products.map(product => (

                <ProductCard key={product.id} product={product} />
              ))
            }
          </div>
          {!isLastPage &&
              <ButtonNextPage onSearch={handleNextPageClick} />
          }
        </section>
      </main>
    </>
  )
}
