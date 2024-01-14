import Link from 'next/link';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-600 dark:hover:text-amber-400">
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden text-sm uppercase sm:inline">{title}</p>
    </Link>
  );
}
