import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}