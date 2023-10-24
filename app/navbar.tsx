import Image from 'next/image'

export default function NavBar() {
    return (
      <nav className="flex flex-row justify-around items-center p-5 bg-white h-32">
        <div className="flex-1 text-3xl text-center flex flex-row justify-start lg:justify-center items-center">
          <p>Logo</p>
          <p className="pl-4 pt-3 relative right-7 top-3 border-b border-black">Empresa</p>
        </div>
        <div className="flex-1 text-xl font-thin hidden lg:block">
          <ul className="flex flex-row justify-center">
            <li className='px-6 hover:border-b cursor-pointer'>Servicios
              <ul className="hiddenList">

              </ul>
            </li>
            <li className='px-6 hover:border-b cursor-pointer'><a href="#">Blog</a></li>
            <li className='px-6 hover:border-b cursor-pointer'><a href="#">Clientes</a></li>
            <li className='px-6 hover:border-b cursor-pointer'><a href="#">Nosotros</a></li>
            <li className='px-6 hover:border-b cursor-pointer'><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="flex-1 text-xl font-thin lg:hidden flex justify-end pr-5">
          <Image src={'/icon-menu.svg'} height={30} width={30} alt='' className='lg:hidden cursor-pointer'/>
          <ul className="flex flex-col absolute top-0 right-0 bg-navbur bg-opacity-100 p-20 w-full justify-start items-center hidden">
            <li className='py-6 hover:border-b cursor-pointer'>Servicios</li>
            <li className='py-6 hover:border-b cursor-pointer'><a href="#">Blog</a></li>
            <li className='py-6 hover:border-b cursor-pointer'><a href="#">Clientes</a></li>
            <li className='py-6 hover:border-b cursor-pointer'><a href="#">Nosotros</a></li>
            <li className='py-6 hover:border-b cursor-pointer'><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="contactContainer grow text-lg text-center w-min hidden lg:flex justify-center">
          <div className="content flex justify-center items-center w-fit border-black border rounded-md shadow-md">
            <Image src="/icon-wsp.svg" alt="" width={48} height={48} className='m-3'/>
            <p className='pr-5'>+54 99 11 1234-5678</p>
          </div>
        </div>
      </nav>
    )
  }
  