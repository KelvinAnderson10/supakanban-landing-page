import { useEffect } from 'react';
import './index.css'

import kanban from '/kanban.png'
import efficiency from '/efficiency.png'
import idea from '/idea.png'
import key from '/key.png'
import stopwatch from '/stopwatch.png'


import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const scrollSmoothTo = (element) => {
    document.getElementById(element).scrollIntoView(true);
  }

  return (
    <div
      className='flex flex-col items-center overflow-y-auto h-screen scroll-smooth
      lg:snap-y lg:snap-mandatory'
    >
      {/* Navbar */}
      <div
        className='fixed z-50 top-[5%] border-2 border-gray-900 rounded-2xl shadow-md bg-white w-full 
        flex justify-between items-center 
        px-4 py-3 max-w-[90%] 
        lg:max-w-[75%] lg:px-16 lg:py-3'
      >
        {/* Navbar (Left container) */}
        <div
          className='flex w-full justify-between items-center 
          lg:w-max lg:justify-center lg:items-center lg:gap-[32px]'
        >
          <a onClick={() => scrollSmoothTo('home')}
            className='text-[24px] text-red-600 mr-6 font-bold'>SupaKanban</a>
          <a onClick={() => scrollSmoothTo('home')}
            className='nav-link'>Home</a>
          <a onClick={() => scrollSmoothTo('feature')}
            className='nav-link'>Features</a>
          <a onClick={() => scrollSmoothTo('about-us')}
            className='nav-link'>About Us</a>
          <button
            className='inline bg-[#FFECA8] text-black font-medium text-nowrap rounded-md 
            cursor-pointer transition ease-in-out shadow-md duration-250 border-2 border-black
            hover:shadow-none py-2 px-5 lg:hidden'
          >Start !</button>
        </div>
        <div>
          <button
            className='hidden lg:block lg:bg-[#FFECA8] lg:text-black lg:font-medium lg:rounded-md 
            lg:py-2 lg:px-5 lg:cursor-pointer lg:transition lg:shadow-md lg:duration-250 
            lg:ease-in-out lg:hover:shadow-none lg:border-2 lg:border-black'
          >Get Started Now !</button>
        </div>
      </div>
      {/* Home Section */}
      <section id='home' className='bg-[#BD9EEB]'>
        <div
          className='w-full flex flex-col justify-end items-center pt-[150px] 
          lg:flex-row lg:max-w-[75%] lg:h-screen lg:justify-between lg:items-center lg:pt-[5%]'>
          {/* Home Illustration (Left) */}
          <div className="max-w-[250px] lg:max-w-[450px]">
            <img src={kanban} data-aos='zoom-in-right' data-aos-duration='1200' alt="Vite logo" />
          </div>
          {/* Home (Right) */}
          <div
            className='text-wrap flex flex-col items-center py-8 max-w-[80%] 
            lg:py-0 lg:max-w-full lg:justify-center lg:items-start lg:w-1/2'
            data-aos='fade-up' data-aos-duration='1200'>
            <p className='text-[48px] leading-tight font-bold text-center lg:text-left'>SupaKanban As
              Your Ultimate Task Manager</p>
            <p className='text-[20px] mt-6 text-center lg:text-left'>Having struggle keeping all your tasks ? No worries !</p>
            <p className='text-[20px] mt-2 mb-8 text-center lg:text-left'>Manage all your tasks all in a single website, with a simple interactive drag and drop. &#10084;&#65039;
            </p>
            <div className='hidden lg:flex lg:gap-3'>
              <input
                className='bg-white rounded-md border-2 border-black shadow-sm 
                px-5 py-2 text-base font-medium text-black focus:outline-none' placeholder='Your Email Address'></input>
              <button
                className='bg-[#FFECA8] text-black font-medium rounded-md 
                py-2 px-5 cursor-pointer transition shadow-md duration-250 
                ease-in-out hover:shadow-none border-2 border-black'>Sign Up - Forever free!</button>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section */}
      <section id='feature' className='bg-[#EFCFAF]'>
        <div
          className='w-full flex flex-col lg:flex-row justify-center gap-[32px] items-center pt-[80px] max-w-[80%] 
          lg:max-w-[75%] lg:h-screen'>
          {/* WHY SUPAKANBAN TEXT */}
          <p
            className='text-[#A37059] text-[40px] font-semibold text-center 
            lg:rotate-180 lg:[writing-mode:vertical-rl] uppercase'>WHY SUPAKANBAN</p>
          {/* GRID (4 CONTAINER) */}
          <div
            className="pb-8 lg:py-0 grid grid-cols-2 w-full justify-between gap-x-[8px] 
            lg:gap-x-[24px] gap-y-[32px] lg:pb-0">
            <div className="card">
              <div className='bg-[#DD7DFF] icon'>
                <img src={efficiency} className='spin'></img>
              </div>
              <div className='flex flex-col'>
                <p className='card-title'>Efficiency</p>
                <p className='card-description'>Enables users to efficiently structure tasks, projects, and ideas, reducing clutter and enhancing clarity in their workflows.</p>
              </div>
            </div>
            <div className="card">
              <div className='bg-[#FFB443] icon'>
                <img src={stopwatch} className='spin'></img>
              </div>
              <div className='flex flex-col'>
                <p className='card-title'>Productivity</p>
                <p className='card-description'>Empowers individuals to manage their time effectively, prioritize tasks, and leading to increased efficiency and accomplishment.</p>
              </div>
            </div>
            <div className="card">
              <div className='bg-[#FF5E5E] icon'>
                <img src={key} className='spin'></img>
              </div>
              <div className='flex flex-col'>
                <p className='card-title'>Accessibility</p>
                <p className='card-description'>Offers a user-friendly interface and intuitive features, ensuring that users can easily utilize the platform to its fullest potential.</p>
              </div>
            </div>
            <div className="card">
              <div className='bg-[#A6DEB7] icon'>
                <img src={idea} className='spin'></img>
              </div>
              <div className='flex flex-col'>
                <p className='card-title'>Insight</p>
                <p className='card-description'>Provides valuable insights into project timelines, enabling users to make informed decisions.</p>
              </div>
            </div>
          </div>
        </div >
      </section>
      <section id='about-us' className='bg-[#23A094] relative'>
        <div
          className='w-full gap-[32px] flex flex-col lg:flex-row justify-between items-center pt-[64px] 
          lg:max-w-[75%] lg:h-screen'>
          <div
            className="bg-[url('/kelvin.png')] h-[250px] w-full max-w-[250px] 
            bg-no-repeat bg-center bg-cover profile-img border-[3px] border-black
            lg:max-h-[400px] lg:max-w-[400px] lg:h-full"></div>
          <div className='w-2/3 flex flex-col gap-4 pb-[100px] lg:pb-0  lg:w-1/2'>
            <p className='text-center text-3xl lg:text-left'>
              "Through this platform, we aim to facilitate seamless task management for all users.”
            </p>
            <p className='text-center text-xl lg:text-left'>- Founder of SupaKanban</p>
          </div>
        </div>
        <footer>
          <p>Made with &#10084;&#65039; - All Rights Reserved.</p>
        </footer>
      </section>
    </div >
  )
}

export default App
