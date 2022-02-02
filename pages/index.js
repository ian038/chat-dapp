import Head from 'next/head'
import Login
 from '../components/Login'
export default function Home() {
  return (
    <div className='h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden'>
      <Head>
        <title>Chat Dapp</title>
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpEgpwgWTPxuVaCIlNCbzPFXL96DYMxbgsg&usqp=CAU" />
      </Head>

      <Login />
    </div>
  )
}
