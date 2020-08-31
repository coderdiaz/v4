import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.dribbble.com/v2/user/shots?per_page=4', {
    headers: {
      authorization: `Bearer ${process.env.DRIBBBLE_TOKEN}`,
    },
  });
  const shots = await res.json();

  return {
    props: {
      shots,
    },
  };
}