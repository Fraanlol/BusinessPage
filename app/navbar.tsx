'use client'
import Image from 'next/image'
import { Player } from '@lottiefiles/react-lottie-player';
import AionData from '../public/icons8-menu.json'
import { useRef } from 'react';

export default function NavBar() {
    const playerRef = useRef<Player>(null);
    function addEvent():void{
      document.getElementById('lottie')?.addEventListener('click', e => {
        if(playerRef.current?.state.instance?.isPaused == true){
          playerRef.current?.play();
          document.querySelector('.navWrapper')?.classList.toggle('show');
        }
      })
    }
    return (
      <nav className="block h-32 lg:h-20 z-10">
        <div className="navWrapper w-full flex flex-row justify-around items-center lg:items-center p-5 bg-white">
          <div className="logoContainer flex-1 text-3xl lg:text-2xl font-bold text-center flex flex-row justify-start lg:justify-center items-center">
            <p>Logo</p>
            <p className="pl-4 pt-2 relative right-7 top-2 border-b border-black">Empresa</p>
          </div>
          <div className="flex-1 text-md font-medium hidden lg:block">
            <ul className="flex flex-row justify-center">
              <li className='px-6 hover:border-b-2 border-yellow-600 cursor-pointer'>Servicios
                <ul className="hiddenList">

                </ul>
              </li>
              <li className='px-6 hover:border-b-2 border-yellow-600 cursor-pointer'><a href="#">Blog</a></li>
              <li className='px-6 hover:border-b-2 border-yellow-600 cursor-pointer'><a href="#">Clientes</a></li>
              <li className='px-6 hover:border-b-2 border-yellow-600 cursor-pointer'><a href="#">Nosotros</a></li>
              <li className='px-6 hover:border-b-2 border-yellow-600 cursor-pointer'><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="self-start flex-1 text-xl font-thin lg:hidden flex justify-end pt-6">
            <Player speed={3} onEvent={event => {
              console.log(event)
            if (event === 'load'){
              addEvent(); 
            }
            if (event == 'frame' && playerRef.current?.state.instance?.isPaused !== true){
              if(playerRef.current!.state.seeker >= 65 && playerRef.current!.state.seeker <= 70){
                console.log('YES');
                playerRef.current!.pause();
                playerRef.current!.setSeeker(71);
              }
            }
          }} src={AionData} ref={playerRef}  style={{ height: '45px', width: '45px' }} className='z-10 relative'>
          </Player>
            <ul id='bgmenu' className="flex text-3xl font-medium flex-col absolute top-0 right-0 bg-navbur bg-opacity-100 pt-32 pl-10 md:pl-20 w-full h-100 justify-start items-start">
              <li className='py-6 hover:border-b-2 border-yellow-600 cursor-pointer'>Servicios</li>
              <li className='py-6 hover:border-b-2 border-yellow-600 cursor-pointer'><a href="#">Blog</a></li>
              <li className='py-6 hover:border-b-2 border-yellow-600 cursor-pointer'><a href="#">Clientes</a></li>
              <li className='py-6 hover:border-b-2 border-yellow-600 cursor-pointer'><a href="#">Nosotros</a></li>
              <li className='py-6 hover:border-b-2 border-yellow-600 cursor-pointer'><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="contactContainer grow text-md text-center w-min hidden lg:flex justify-center">
            <div className="content flex justify-center items-center w-fit border-black border rounded-md shadow-md">
              <Image src="/icon-wsp.svg" alt="" width={28} height={28} className='m-3'/>
              <a className='pr-5 font-medium'>+54 99 11 1234-5678</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  