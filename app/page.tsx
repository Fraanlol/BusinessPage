import Image from 'next/image'
import NavBar from './navbar'

export default function Home() {
  return (
    <main>
      <header className='z-10 relative'>
        <NavBar></NavBar>
      </header>
      <div className='hero-section w-full flex justify-center flex-row pt-14 pl-5 lg:pt-0 gap-x-24'>
        <div className="copyContainer h-full w-full flex justify-start flex-col pl-5 items-start mb-10 lg:w-2/3 lg:justify-center">
            <h1 className='text-12vw font-bold leading-tight mb-4 lg:text-7xl'>
              Abre una LLC <br />en 3 pasos
            </h1>
            <h3 className='text-2xl font-normal mb-10'>Lleva tus negocios a Estados Unidos.</h3>
            <div className="cta-container flex flex-row gap-8">
              <div className="button btn-learn border-2 rounded-xl border-black text-xl shadow-2xl py-6">¿Cómo funciona?</div>
              <div className="button btn-services rounded-lg text-xl shadow-2xl py-6"><p>Servicios</p></div>
            </div>
        </div>
        <div className="hidden imageWrapper h-full w-full lg:block">
          <figure className="hero-bg">

          </figure>
        </div>
      </div>
    </main>
  )
}
