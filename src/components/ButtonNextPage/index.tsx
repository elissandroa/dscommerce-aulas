/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';

type Props = {
  onSearch:() => any;
}

export default function ButtonNextPage({onSearch}:Props) {
  return (
    <div onClick={onSearch}className="dsc-btn-next-page">
        carregar mais
      </div>
  )
}
