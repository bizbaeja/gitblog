import Container from "components/Container";
import { allBlogPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Blog = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(blog.body.code);

  const customMeta = {
    title: blog.title,
    description: blog.description,
    date: new Date(blog.date).toISOString(),
  };

  return (
    <Container customMeta={customMeta}>
      <div className="mt-10 prose">
        <h1 className="text-sky-700">{blog.title}</h1>
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allBlogPosts.map((p) => ({ params: { blog: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const blog = allBlogPosts.find((p) => p._raw.flattenedPath === params.blog);
  return {
    props: {
      blog,
    },
  };
};

export default Blog;
