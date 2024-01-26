import type { NextPage } from 'next';
import TilPost from 'components/TilPost';
import Container from 'components/Container';
import { allTilPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';


const Til = ({ til }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {til.map((til) => (
          <TilPost
            date={til.date }
            title={til.title }
            des={til.description }
            til={til._raw.flattenedPath}
            key={til._id }
          />
        ))}
      </div>
    </Container>
  );
};


export const getStaticProps = async () => {
  const til = allTilPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      til
    }
  };
};

export default Til;
