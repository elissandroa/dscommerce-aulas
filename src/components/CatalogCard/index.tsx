import './styles.css';
import SearchBar from '../SearchBar';
import ProductCard from '../ProductCard';
import ButtonNextPage from '../ButtonNextPage';


export default function CatalogCard() {
  return (
    <main>
    <section id="dsc-catalog-section" className="dsc-container">
      <SearchBar />
      <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
        <ProductCard price= "R$ 5000.00" nameProduct="Computador Gamer XT" />
        <ProductCard price= "R$ 5000.00" nameProduct="Computador Gamer XT" />
        <ProductCard price= "R$ 5000.00" nameProduct="Computador Gamer XT" />
        <ProductCard price= "R$ 5000.00" nameProduct="Computador Gamer XT" />
        <ProductCard price= "R$ 5000.00" nameProduct="Computador Gamer XT" />
        <ProductCard price= "R$ 5000.00" nameProduct="Computador Gamer XT" />
        <ProductCard price= "R$ 5000.00" nameProduct="Computador Gamer XT" />
        <ProductCard price= "R$ 5000.00" nameProduct="Computador Gamer XT" />
        <ProductCard price= "R$ 5000.00" nameProduct="Computador Gamer XT" />
        <ProductCard price= "R$ 5000.00" nameProduct="Computador Gamer XT" />
        <ProductCard price= "R$ 5000.00" nameProduct="Computador Gamer XT" />
    
      </div>
      <ButtonNextPage />
    </section>
  </main>
  )
}
