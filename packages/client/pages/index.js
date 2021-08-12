import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState({ message: '' });
  // fetch message from backend server (localhost:4000) and set it to state
  useEffect(() => {
    fetch('http://localhost:4000')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMessage(res);
      });
  }, []);
  console.log(message);
  return (
    <div className='Home'>
      <Head>
        <title>Home</title>
      </Head>
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>
              Evolving Software
            </h2>
            <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              MVP Starter Kit
            </p>
            <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500 mb-6'>
              Everything you need to get started with a modern web app. NextJS,
              NestJS, RxDB, Lerna, ESLint, Jest, and more.
            </p>
            <a
              href='#'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Github Repository
            </a>
          </div>
          <div className='text-center mt-6'>
            <h2 className='text-4xl'>Message From The API</h2>
            {/* This data is loaded from the API. */}
            <p className='text-base text-gray-900 mt-6'>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
