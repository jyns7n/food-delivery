'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CartIcon from './CartIcon';

const links = [
  { id: 1, title: 'Hompage', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'Working Hours', url: '/' },
  { id: 4, title: 'Contact', url: '/' },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = false;

  return (
    <div>
      {!isOpen ? (
        <Image
          src='/open.png'
          alt=''
          width={20}
          height={20}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      ) : (
        <Image
          src='/close.png'
          alt=''
          width={20}
          height={20}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      )}
      {isOpen && (
        <div className='bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col items-center justify-center gap-8 z-10'>
          {links.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href='/login' onClick={() => setIsOpen((prev) => !prev)}>
              Login
            </Link>
          ) : (
            <Link href='/order' onClick={() => setIsOpen((prev) => !prev)}>
              Order
            </Link>
          )}
          <Link href='/cart' onClick={() => setIsOpen((prev) => !prev)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
