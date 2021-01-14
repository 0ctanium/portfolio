import React from 'react';
import { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import Card from '@components/Card';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-base font-bold text-6xl text-center">
        Welcome to{' '}
        <a href="https://nextjs.org" className="text-blue-600 hover:underline">
          Next.js!
        </a>
      </h1>

      <p className="text-base text-black text-xl my-5 text-center">
        Get started by editing <code>pages/index.tsx</code>
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 gap-x-6 max-w-3xl sm:grid-cols-2">
        <Card
          link={'https://nextjs.org/docs'}
          title={'Documentation'}
          desc={'Find in-depth information about Next.js features and API.'}
        />

        <Card
          link={'https://nextjs.org/learn'}
          title={'Learn'}
          desc={'Learn about Next.js in an interactive course with quizzes!'}
        />

        <Card
          link={'https://github.com/vercel/next.js/tree/master/examples'}
          title={'Examples'}
          desc={'Discover and deploy boilerplate example Next.js projects.'}
        />

        <Card
          link={
            'https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          }
          title={'Deploy'}
          desc={
            'Instantly deploy your Next.js site to a public URL with Vercel.'
          }
        />
      </div>
      <style jsx>{`
        code {
          @apply rounded p-3 text-lg;
          background-color: #fafafa;
          line-height: 1.75rem;
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;
