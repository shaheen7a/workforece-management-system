import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import hero from "../assets/hero.png"

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <div className='flex justify-between items-center p-10 m-10'>
        <div className='intro border'>
          <h1 className='mb-4  font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'>Workforce Management Software</h1>
          <p class="mb-6 font-normal text-gray-700 lg:text-xl">Simplify employee scheduling, task management, attendance, and help managers make the right decisions in the moment.</p>
          <button className='bg-[#00BFA6] hover:bg-green-500 text-white font-bold py-2 px-4 rounded'>Book a call</button>
          <button className='bg-[#00BFA6] hover:bg-green-500 text-white font-bold py-2 px-4 rounded ml-10'>Get Started</button>
        </div>

        <div className="border"> 
          <img
            src={hero}
            alt="hero"
            className='w-50 h-50'
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home