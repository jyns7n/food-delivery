// const Footer = () => {
//   return (
//     <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
//       <Link href='/' className='font-bold text-xl'>
//         MASSIMO
//       </Link>
//       <p>ALL RIGHT RESERVED.</p>
//     </div>
//   );
// };

// export default Footer;

import Link from 'next/link';

const footerLinks = [
  {
    title: 'About us',
    links: [
      { title: 'How to order', url: '/' },
      { title: 'Featured', url: '/' },
      { title: 'Partnership', url: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'Help Center', url: '/' },
      { title: 'Invite a friend', url: '/' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { title: 'Instagram', url: '/' },
      { title: 'Twitter', url: '/' },
      { title: 'Facebook', url: '/' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className='mt-5 border-t border-red-100'>
      <div className='flex flex-col items-center justify-between md:flex-row p-10'>
        <div className='w-full flex md:flex-row flex-col justify-center gap-8'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col gap-6 text-red-700'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className='text-red-500'>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className='w-full flex items-center flex-col mt-10 md:mt-0'>
          <p className='text-base text-red-500'>
            MASSIMO 2023 All rights reserved &copy;{' '}
          </p>
          <div className='flex gap-8 pt-10 items-center justify-center'>
            <Link href='/' className='text-red-500'>
              Privacy Policy
            </Link>
            <Link href='/' className='text-red-500'>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
