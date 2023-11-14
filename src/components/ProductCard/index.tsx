import imgCatalog from '../../assets/computer.png';
import './styles.css';

type Props = {
  price: string;
  nameProduct: string;
}

export default function ProductCard({price, nameProduct}: Props) {
  return (
    <div className="dsc-card">
          <div className="dsc-catalog-card-top dsc-line-bottom">
            <img src={imgCatalog} alt="Computador" />
          </div>
          <div className="dsc-catalog-card-bottom">
            <h3>{price}</h3>
            <h4>{nameProduct}</h4>
          </div>
        </div>
  )
}
