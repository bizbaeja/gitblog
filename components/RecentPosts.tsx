import Link from 'next/link';

const RecentPosts = ({ posts }) => {
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold`}>게시물</h1>
      <div className={`flex flex-col`}>
        {posts.slice(0, 10).map((posts) => (
          <Link
            key={posts._id}
            href={`/til/${posts._raw.flattenedPath}`}
            passHref
          >
            <a className="mt-5">
              <div className={`font-medium text-xl`}>{posts.title}</div>
              <div className={`font-light`}>{posts.description}</div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
