import Head from 'next/head'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const Search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Spoogle</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className='flex space-x-4 items-center'>
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://i.pinimg.com/564x/73/af/0c/73af0c0389795511117949da29f3079c.jpg" />
        </div>
      </header>

      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image src={'https://logos.textgiraffe.com/logos/logo-name/33358183-designstyle-pastel-s.png'} height={100} width={400} alt={''} />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input ref={searchInputRef} type="text" className='flex-grow focus:outline-none' />
          <MicrophoneIcon className='h-5' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={Search} className="bg-blue-100 p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md">Spoogle Search</button>
          <button onClick={Search} className="bg-blue-100 p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md">I am Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}
