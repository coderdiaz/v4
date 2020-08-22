import useDarkMode from 'use-dark-mode';

const ColorSwitch = () => {
  const darkMode = useDarkMode(false);

  return <button onClick={darkMode.toggle} className="inline-flex items-center text-dark-500 hover:text-dark-800 md:bg-gray-50 md:hover:bg-gray-100 dark:text-white dark-hover:text-white md:dark:bg-dark-500 md:dark-hover:bg-dark-700 rounded p-3 transition duration-300 ease-in-out fill-current outline-none shadow-none" aria-label="Dark Mode">
    { darkMode.value ? <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block align-middle flex-shrink-0">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
    </svg> : <svg className="w-4 h-4 inline-block align-middle flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24">
      <path fill="currentColor" d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z" />
    </svg>}
  </button>
}

export default ColorSwitch;