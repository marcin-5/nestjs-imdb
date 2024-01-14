import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className="flex gap-6 justify-center p-4 bg-amber-100 dark:bg-zinc-600 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
