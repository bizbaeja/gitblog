import Link from "next/link";
interface BlogPostProps {
  date: string;
  title: string;
  des: string;
  blog: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ date, title, des, blog}) => {
  return (
    <Link href={`/blog/${blog}`} passHref>
      <a className="w-full my-7 hover:-translate-x-1.5">

        <div className={`font-extrabold text-2xl mt-2`}>
        <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{des}</p>
      <p>{blog}</p>
    </div>
        </div>
      
      </a>
    </Link>
  );
};

export default BlogPost;
