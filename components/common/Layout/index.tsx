import { FC, ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main style={{ marginTop: 'var(--navbar-height)' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
