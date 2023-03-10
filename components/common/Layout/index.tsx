import { FC, ReactNode } from 'react';
import Navbar from '../Navbar';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main style={{ marginTop: 'var(--navbar-height)' }}>{children}</main>
    </>
  );
};

export default Layout;
