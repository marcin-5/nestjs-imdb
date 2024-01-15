import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  return (
    <div className="rounded-lg transition-shadow duration-200 cursor-pointer group sm:hover:shadow-stone-400 sm:shadow-md sm:border sm:border-stone-400 sm:m-2">
      <Link href={`/movie/${result.id}`}>
        <Image
          className="mx-auto transition-opacity duration-300 sm:rounded-t-lg group-hover:opacity-75"
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt={result.title || result.name}
          priority={true}
        ></Image>
        <div className="p-2 mx-auto w-[510px] sm:w-full">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">{result.title || result.name}</h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="mr-1 mb-1 ml-3 h-5" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
