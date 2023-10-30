import NavBar from './navbar'
import Content from './content'

export default function Home() {
  return (
    <main>
      <header className='z-10 relative'>
        <NavBar></NavBar>
      </header>
      <div className='hero-section w-full flex justify-start flex-row pl-8 lg:pt-0 gap-x-24 items-start lg:items-center lg:justify-center'>
        <div className="section-content h-fit">
          <div className="copyContainer h-full w-full flex justify-start flex-col pl-5 items-start mb-4 lg:w-full lg:justify-center">
              <h1 className='text-12vw font-bold leading-tight mb-4 lg:text-7xl'>
                Abre una LLC <br />en 3 pasos
              </h1>
              <h3 className='text-2xl font-normal mb-5'>Lleva tus negocios a Estados Unidos.</h3>
          </div>
          <div className="hero-cta flex flex-row gap-8 items-start lg:px-8">
            <div className="button btn-learn border-2 rounded-xl border-black text-xl shadow-2xl py-6"><a>¿Cómo funciona?</a></div>
            <div className="button btn-services rounded-lg text-xl shadow-2xl py-6"><a>Servicios</a></div>
          </div>
        </div>
        <div className="hidden imageWrapper h-full w-full lg:block">
          <figure className="hero-bg">

          </figure>
        </div>
      </div>
      <Content></Content>
    </main>
  )
}
