import Container from "components/Container";
import { allTilPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Til = ({ til }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(til.body.code);

  const customMeta = {
    title: til.title,
    description: til.description,
    date: new Date(til.date).toISOString(),
  };

  return (
    <Container customMeta={customMeta}>
      <div className="mt-10 prose">
        <h1 className="text-sky-700">{til.title}</h1>
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allTilPosts.map((p) => ({ params: { til: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const til = allTilPosts.find((p) => p._raw.flattenedPath === params.til);
  return {
    props: {
      til,
    },
  };
};

export default Til;
