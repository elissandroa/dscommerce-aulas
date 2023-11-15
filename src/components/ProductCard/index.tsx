import './styles.css';
type Props = {
  price:number;
  name: string;
  imgUrl: string;
}

export default function ProductCard({ price, name, imgUrl }: Props) {
  return (
    <div className="dsc-card">
          <div className="dsc-catalog-card-top dsc-line-bottom">
            <img src={imgUrl} alt={name} />
          </div>
          <div className="dsc-catalog-card-bottom">
            <h3>R$ { price.toFixed(2) }</h3>
            <h4>{ name }</h4>
          </div>
        </div>
  )
}
