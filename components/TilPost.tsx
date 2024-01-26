import Link from 'next/link';
interface TilPostProps {
  date: string;
  title: string;
  des: string;
  til: string;
}



const TilPost: React.FC<TilPostProps> = ({ date, title, des, til }) => {
  return (
    <Link href={`/til/${til}`} passHref>
      <a className="w-full my-7 hover:-translate-x-1.5">

        <div className={`font-extrabold text-2xl mt-2`}>
        <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{des}</p>
      <p>{til}</p>
    </div>
        </div>
      
      </a>
    </Link>
  );
};

export default TilPost;
