import Image from 'next/image';
import SpinnerImg from '../assets/spinner.svg';

export default function Loading() {
  return (
    <div className="flex justify-center mt-16">
      <Image width={200} height={200} src={SpinnerImg} alt="loading..." />
    </div>
  );
}
