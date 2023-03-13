import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FiKey, FiHeart } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <Link href='/'>
          <Image
            src='/images/drawing.webp'
            alt='Bookingly logo'
            width={120}
            height={30}
          />
        </Link>
      </div>
      <ul role='list' className={styles['primary-nav']}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/events'>Events</Link>
        </li>
        <li>
          <Link href='/create-event'>Create Event</Link>
        </li>
      </ul>
      <ul role='list' className={styles['secondary-nav']}>
        <li>
          <Link href='/login'>
            <FiHeart />
          </Link>
        </li>
        <li>
          <Link href='/favourites'>
            <FiKey />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
