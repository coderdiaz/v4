import Link from 'next/link';

const Header = () => {
  return <header className="py-6 md:py-8 lg:py-10">
    <div className="container mx-auto max-w-4xl px-6 md:px-8 lg:px-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="w-24 mr-4 md:mr-8 fill-current text-primary-500">
            <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 72.28 75.44">
              <path d="M46.08,5.29,17.65,12.51a19.57,19.57,0,0,0-14.75,19V51.18A19.56,19.56,0,0,0,22.47,70.74H49.82A19.56,19.56,0,0,0,69.38,51.18V23.4A18.69,18.69,0,0,0,46.08,5.29Zm.62,42.14L35.43,59.21a5.36,5.36,0,0,1-7.57.17h0a5.38,5.38,0,0,1-.17-7.58l7.56-7.9a5.35,5.35,0,0,0-.16-7.57l-7.91-7.56A5.35,5.35,0,0,1,27,21.2h0A5.36,5.36,0,0,1,34.58,21L46.36,32.29,50.23,36a5.36,5.36,0,0,1,.17,7.57Z" fill-rule="even-odd"/>
              <path d="M70.4,35.81,58.52,10.7A18.7,18.7,0,0,0,29.71,4.29L7.1,23A19.56,19.56,0,0,0,1.88,46.43l8.43,17.82a19.57,19.57,0,0,0,26.05,9.31l24.72-11.7A19.56,19.56,0,0,0,70.4,35.81ZM58.63,47.07c-.5,3-.87,6.24-2.56,8.86-3.46,5.37-11.23,8.49-17.33,9.35-4.81.68-11.49.65-15.56-2.49-9.11-3.89-10.53-18.34-9.91-26.91.6-8.31,4.07-17.73,12.23-19.42a2.12,2.12,0,0,1,.36-.1c12.28-2.07,29.85,4.81,33.29,17.92C60.27,38.55,59.34,42.82,58.63,47.07Z" fill-rule="even-odd" className="opacity-25"/>
            </svg>
          </a>
        </Link>
        <ul className="flex justify-end items-center">
          <li className="hidden md:block mr-2">
            <Link href="/about">
              <a className="inline-block text-dark-800 hover:text-black hover:bg-gray-50 rounded font-medium py-2 px-4 transition duration-300 ease-in-out">About</a>
            </Link>
          </li>
          <li className="hidden md:block mr-2">
            <Link href="/blog">
              <a className="inline-block text-dark-800 hover:text-black hover:bg-gray-50 rounded font-medium py-2 px-4 transition duration-300 ease-in-out">Blog</a>
            </Link>
          </li>
          <li className="hidden md:block mr-12">
            <Link href="/">
              <a className="inline-block text-primary-500 hover:text-primary-900 hover:bg-gray-50 rounded font-bold py-2 px-4 transition duration-300 ease-in-out">Home</a>
            </Link>
          </li>
          <li className="mr-3 md:-mr-4 items-center">
            <Link href="/">
              <button className="inline-flex items-center text-dark-500 hover:text-dark-800 md:bg-gray-50 md:hover:bg-gray-100 rounded p-3 transition duration-300 ease-in-out fill-current">
                <svg className="w-4 h-4 inline-block align-middle flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z" />
                </svg>
              </button>
            </Link>
          </li>
          <li className="block md:hidden">
            <button className="inline-flex items-center text-dark-500 md:bg-gray-50 md:hover:bg-gray-100 p-2">
              <svg viewBox="0 0 20 20" className="w-6 h-6 inline-block align-middle flex-shrink-0">
                <path fill="currentColor" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>;
}

export default Header;