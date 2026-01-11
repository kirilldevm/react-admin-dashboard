import { Outlet } from 'react-router';
import Footer from '../components/footer/footer';
import Menu from '../components/menu/menu';
import Navbar from '../components/navbar/navbar';

export default function AppLayout() {
  return (
    <div className='main'>
      <Navbar />
      <div className='container'>
        <div className='menuContainer'>
          <Menu />
        </div>
        <div className='contentContainer'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
