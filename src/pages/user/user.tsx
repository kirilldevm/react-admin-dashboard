import Single from '../../components/single/single';
import { singleUser } from '../../data';

export default function User() {
  return (
    <div className='user'>
      <Single {...singleUser} />
    </div>
  );
}
