import Single from '../../components/single/single';
import { singleProduct } from '../../data';

export default function Product() {
  return (
    <div className='product'>
      <Single {...singleProduct} />
    </div>
  );
}
