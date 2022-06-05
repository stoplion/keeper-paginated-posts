import Head from 'next/head';
import type { NextPage } from 'next';
import { Posts } from '../components/Posts';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Keeper / Paginated Posts</title>
        <meta name='description' content='Keeper / Paginated Posts' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Posts />
    </div>
  );
};

export default Home;
