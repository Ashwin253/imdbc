import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Result from '../components/Result'

export default function Home() {
  return (
    <div>
    
    {/* header */}
    <Header/>
{/* navbar */}
<Navbar/>
{/* result */}
<Result/>
    </div>
  )
}
