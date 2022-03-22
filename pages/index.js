import Head from 'next/head'
import Image from 'next/image'
import Main from '../Components/Layout/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='w-full bg-[#000000] min-h-screen'>
      <title>Wove Project</title>
      <Main />
    </div>
  )
}
