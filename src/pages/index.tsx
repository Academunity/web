import { GetServerSideProps } from 'next';

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/sign-in',
      statusCode: 303,
    },
  };
};
