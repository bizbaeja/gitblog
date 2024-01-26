import type { NextPage } from 'next';
import BlogPost from 'components/BlogPost';

import Container from 'components/Container';
import { allBlogPosts} from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

const Blog = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {blog.map((blog) => (
          <BlogPost
            date={blog.date}
            title={blog.title}
            des={blog.description}
            blog={blog._raw.flattenedPath}
            key={blog._id}
          />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const blog = allBlogPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      blog
    }
  };
};

export default Blog;
