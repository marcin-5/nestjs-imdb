import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import MenuItem from './MenuItem';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 mx-auto max-w-6xl">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-4 items-center">
        <ThemeSwitch />
        <Link href={'/'} className="flex gap-1 items-center">
          <span className="px-2 py-1 text-2xl font-bold bg-amber-300 rounded-lg dark:bg-amber-500">
            IMDb
          </span>
          <span className="hidden text-xl sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}
