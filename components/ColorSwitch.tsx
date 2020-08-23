import dynamic from 'next/dynamic';
import useDarkMode from 'use-dark-mode';
const SunIcon = dynamic(() => import('./SunIcon'), { ssr: false }) ;
const MoonIcon = dynamic(() => import('./MoonIcon'), { ssr: false }) ;

const ColorSwitch = () => {
  const { value, toggle } = useDarkMode(false);

  return <button onClick={toggle} className="inline-flex items-center text-dark-500 hover:text-dark-800 md:bg-gray-50 md:hover:bg-gray-100 dark:text-white dark-hover:text-white md:dark:bg-dark-500 md:dark-hover:bg-dark-700 rounded p-3 transition duration-300 ease-in-out fill-current outline-none shadow-none" aria-label="Dark Mode">
    { value ? <SunIcon /> : <MoonIcon />}
  </button>
}

export default ColorSwitch;