import useDarkMode from 'use-dark-mode';

const ColorSwitch = () => {
  const darkMode = useDarkMode(false);

  return <button onClick={darkMode.toggle} className="inline-flex items-center text-dark-500 hover:text-dark-800 md:bg-gray-50 md:hover:bg-gray-100 dark:text-white dark-hover:text-white md:dark:bg-dark-500 md:dark-hover:bg-dark-700 rounded p-3 transition duration-300 ease-in-out fill-current" aria-label="Dark Mode">
    <svg className="w-4 h-4 inline-block align-middle flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24">
      <path fill="currentColor" d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z" />
    </svg>
  </button>
}

export default ColorSwitch;