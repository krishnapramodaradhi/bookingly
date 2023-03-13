import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <Image
          src='/images/drawing.webp'
          alt='Bookingly'
          width={100}
          height={30}
          style={{ width: 'auto', height: 'auto' }}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          officiis corrupti dolores. Eveniet, itaque. Quia eius eligendi natus
          praesentium quam neque nisi quae est repudiandae nobis minima tempora
          quasi, molestiae officia, fugiat quidem consectetur veritatis?
        </p>
        <p className={styles.copyright}>
          <FaRegCopyright />
          Copyrights. All rights reserved.{' '}
          <Link href='/'>bookingly.amethyst.ga</Link>
        </p>
      </div>
      <div className={styles['quick-links']}>
        <h2>Quick Links</h2>
        <ul role='list'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/events'>Events</Link>
          </li>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <Link href='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.newsletter}>
        <h2>News Letter</h2>
        <p>Subscribe to our newsletter for more exciting content!!</p>
        <div>
          <input type='text' placeholder='Enter your Email' />
          <button aria-label='A send button'>
            <FiSend />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
