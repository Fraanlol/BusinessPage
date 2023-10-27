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
      <nav className="block h-28 z-10">
        <div className="navWrapper fixed w-full flex flex-row justify-around items-start lg:items-center p-5 bg-white">
          <div className="logoContainer flex-1 text-3xl font-bold text-center flex flex-row justify-start lg:justify-center items-center">
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
          <div className="flex-1 text-xl font-thin lg:hidden flex justify-end pt-6">
            <Player speed={3} onEvent={event => {
            if (event === 'load'){
              addEvent(); 
            }
            if (event == 'frame' && playerRef.current?.state.instance?.isPaused !== true){
              if(playerRef.current?.state.seeker == 70){
                playerRef.current.pause();
                playerRef.current.setSeeker(71);
              }
            }
          }} src={AionData} ref={playerRef}  style={{ height: '50px', width: '50px' }} className='z-10 relative'></Player>
            <ul id='bgmenu' className="flex text-2xl flex-col absolute top-0 right-0 bg-navbur bg-opacity-100 pt-32 pl-10 md:pl-20 w-full h-100 justify-start items-start">
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
        </div>
      </nav>
    )
  }
  