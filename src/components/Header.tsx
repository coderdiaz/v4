import dynamic from 'next/dynamic';
import Link from 'next/link';
import Avatar from '@/assets/images/avatar.png';
import Container from '@/components/Container';
const ColorSwitch = dynamic(() => import('./ColorSwitch'), { ssr: false });
import SiteData from '@/seo-next.config';

interface HeaderProps {
  language: string;
}

const Header = ({ language }: HeaderProps) => {
  const menus = SiteData.site[language].menu;

  return <header className="py-6 md:py-8 lg:py-10 border-t-4 border-primary-400">
    <Container className="max-w-4xl">
      <div className="flex items-center ">
        <Link href="/">
          <a className="flex flex-row items-center fill-current transition duration-300 ease-in-out mr-6">
            <svg className="hidden w-6 h-6" viewBox="0 0 72.28 75.44">
              <path d="M46.08,5.29,17.65,12.51a19.57,19.57,0,0,0-14.75,19V51.18A19.56,19.56,0,0,0,22.47,70.74H49.82A19.56,19.56,0,0,0,69.38,51.18V23.4A18.69,18.69,0,0,0,46.08,5.29Zm.62,42.14L35.43,59.21a5.36,5.36,0,0,1-7.57.17h0a5.38,5.38,0,0,1-.17-7.58l7.56-7.9a5.35,5.35,0,0,0-.16-7.57l-7.91-7.56A5.35,5.35,0,0,1,27,21.2h0A5.36,5.36,0,0,1,34.58,21L46.36,32.29,50.23,36a5.36,5.36,0,0,1,.17,7.57Z" fillRule="evenodd"/>
            </svg>
            <img className="w-10 rounded-full" src={Avatar} alt="Avatar of Javier Diaz Chamorro" />
          </a>
        </Link>
        <ul className="hidden md:flex justify-start items-center">
          <li className="items-center">
            <Link href="/">
              <a className={`inline-block hover:text-primary-900 hover:bg-gray-50 dark-hover:text-white dark-hover:bg-dark-600 rounded font-bold px-2 py-1 transition duration-300 ease-in-out ${language === 'es' ? 'text-primary-900 dark:text-primary-400' : 'text-dark-800 dark:text-gray-500'}`}>ES</a>
            </Link>
          </li>
          <li className="items-center">
            <Link href="/en">
              <a className={`inline-block hover:text-primary-900 hover:bg-gray-50 dark-hover:text-white dark-hover:bg-dark-600 rounded font-bold px-2 py-1 transition duration-300 ease-in-out ${language === 'en' ? 'text-primary-900 dark:text-primary-400' : 'text-dark-800 dark:text-gray-500'}`}>EN</a>
            </Link>
          </li>
        </ul>
        <ul className="flex w-full justify-end items-center">
          {menus.map((item, index) => <li key={index} className="hidden md:block mr-2">
            <Link href={item.href}>
              <a className="inline-block text-dark-800 hover:text-primary-900 hover:bg-gray-50 dark:text-gray-500 dark-hover:text-white dark-hover:bg-dark-600 rounded font-bold py-2 px-4 transition duration-300 ease-in-out">{item.name}</a>
            </Link>
          </li>)}
          <li className="md:ml-10 mr-3 md:-mr-4 items-center">
            <ColorSwitch />
          </li>
          <li className="hidden">
            <button className="inline-flex items-center text-dark-500 md:bg-gray-50 md:hover:bg-gray-100 p-2" aria-label="Menu">
              <svg viewBox="0 0 20 20" className="w-6 h-6 inline-block align-middle flex-shrink-0">
                <path fill="currentColor" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </Container>
  </header>;
}

export default Header;