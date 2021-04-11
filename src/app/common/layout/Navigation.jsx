import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Navigation = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Navigation;
