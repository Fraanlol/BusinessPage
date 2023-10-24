import Image from 'next/image'
import NavBar from './navbar'

export default function Home() {
  return (
    <header>
      <NavBar></NavBar>
      <div className='hero-section hero-bg'>
        <h2>El pepe</h2>
      </div>
    </header>
  )
}
