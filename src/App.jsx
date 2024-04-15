import { useEffect } from 'react';
import './App.css'
import './index.css'

import kanban from '/kanban.png'
import efficiency from '/efficiency.png'
import idea from '/idea.png'
import key from '/key.png'
import stopwatch from '/stopwatch.png'
import kelvin from '/kelvin.png'


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
    <div className='flex flex-col items-center lg:snap-y lg:snap-mandatory overflow-y-auto h-screen scroll-smooth'>
      {/* Nav */}
      <div className='fixed z-50 top-[5%] border-2 border-gray-900 rounded-2xl shadow-md bg-white w-full flex justify-between items-center px-4 py-3 max-w-[90%] lg:max-w-[75%] lg:px-16 lg:py-3'>
        <div className='flex w-full justify-between items-center lg:w-max lg:justify-center lg:items-center lg:gap-[32px]'>
          <a onClick={() => scrollSmoothTo('home')} className='text-[24px] text-red-600 mr-6 font-bold'>SupaKanban</a>
          <a onClick={() => scrollSmoothTo('home')} className='hidden lg:inline lg:text-[18px] lg:font-medium'>Home</a>
          <a onClick={() => scrollSmoothTo('feature')} className='hidden lg:inline lg:text-[18px] lg:font-medium'>Features</a>
          <a onClick={() => scrollSmoothTo('about-us')} className='hidden lg:inline lg:text-[18px] lg:font-medium'>About Us</a>
          <button className='inline bg-[#FFECA8] text-black font-medium rounded-md 
            shadow-sm py-2 px-5 cursor-pointer transition shadow-md duration-250 
            ease-in-out hover:shadow-none border-2 border-black text-nowrap lg:hidden'
          >Start !</button>
        </div>
        <div>
          <button className='hidden lg:block lg:bg-[#FFECA8] lg:text-black lg:font-medium lg:rounded-md 
            lg:shadow-sm lg:py-2 lg:px-5 lg:cursor-pointer lg:transition lg:shadow-md lg:duration-250 
            lg:ease-in-out lg:hover:shadow-none lg:border-2 lg:border-black'
          >Get Started Now !</button>
        </div>
      </div>
      {/* Home Section */}
      <section id='home' className='bg-[#BD9EEB] border-b border-black snap-start snap-always w-full flex 
        flex-col items-center'>
        <div className='w-full flex flex-col justify-end items-center pt-[150px] lg:pt-[5%] 
          lg:flex-row lg:max-w-[75%] lg:h-screen lg:justify-between lg:items-center'>
          {/* Home Illustration (Left) */}
          <div className="max-w-[250px] lg:max-w-[450px]">
            <img src={kanban} data-aos='zoom-in-right' data-aos-duration='1200' alt="Vite logo" />
          </div>
          {/* Home (Right) */}
          <div className='text-wrap flex flex-col items-center py-8 max-w-[80%] lg:py-0 lg:max-w-full lg:justify-center lg:items-start lg:w-1/2'
            data-aos='fade-up' data-aos-duration='1200'>
            <p className='text-[48px] leading-tight font-bold text-center lg:text-left'>SupaKanban As
              Your Ultimate Task Manager</p>
            <p className='text-[20px] mt-6 text-center lg:text-left'>Having struggle keeping all your tasks ? No worries !</p>
            <p className='text-[20px] mt-2 mb-8 text-center lg:text-left'>Manage all your tasks all in a single website, with a simple interactive drag and drop. &#10084;&#65039;
            </p>
            <div className='hidden lg:flex lg:gap-3'>
              <input className='rounded-md border-2 border-black shadow-sm px-5 py-2 text-base font-medium text-black bg-white focus:outline-none' placeholder='Your Email Address'></input>
              <button className='bg-[#FFECA8] text-black font-medium rounded-md 
            shadow-sm py-2 px-5 cursor-pointer transition shadow-md duration-250 
            ease-in-out hover:shadow-none border-2 border-black'>Sign Up - Forever free!</button>
            </div>
          </div>
        </div>
      </section >
      {/* Feature Section */}
      <section id='feature' className='bg-[#EFCFAF] border-b border-black snap-start snap-always w-full flex 
        flex-col items-center'>
        <div className='w-full flex flex-col lg:flex-row justify-center gap-[32px] items-center pt-[80px] max-w-[80%] lg:max-w-[75%] lg:h-screen'>
          {/* WHY SUPAKANBAN TEXT */}
          <p className='text-[#A37059] text-[40px] font-semibold text-center lg:rotate-180 lg:[writing-mode:vertical-rl] uppercase'>WHY SUPAKANBAN</p>
          {/* GRID (4 CONTAINER) */}
          <div className="py-8 lg:py-0 grid grid-cols-2 w-full justify-between gap-x-[8px] lg:gap-x-[24px] gap-y-[32px]">
            <div className="lg:h-[180px] rounded-lg bg-white border-2 border-solid 
            border-gray-900 shadow-md flex flex-col lg:flex-row items-center lg:justify-between py-[20px] px-[30px] gap-[20px] lg:gap-[50px]">
              <div className='shrink-0 bg-[#DD7DFF] rounded-full shadow-md w-[60px] h-[60px] border-2 border-solid border-black'>
                <img src={efficiency} className='spin'></img>
              </div>
              <div className='flex flex-col'>
                <p className='text-lg text-center lg:text-left lg:text-3xl font-bold flex-none'>Efficiency</p>
                <p className='text-xs text-center lg:text-left lg:text-base text-wrap'>Enables users to efficiently structure tasks, projects, and ideas, reducing clutter and enhancing clarity in their workflows.</p>
              </div>
            </div>
            <div className="lg:h-[180px] rounded-lg bg-white border-2 border-solid 
            border-gray-900 shadow-md flex flex-col lg:flex-row items-center lg:justify-between py-[20px] px-[30px] gap-[20px] lg:gap-[50px]">
              <div className='shrink-0 bg-[#FFB443] rounded-full shadow-md w-[60px] h-[60px] border-2 border-solid border-black'>
                <img src={stopwatch} className='spin'></img>
              </div>
              <div className='flex flex-col'>
                <p className='text-lg text-center lg:text-left lg:text-3xl font-bold flex-none'>Productivity</p>
                <p className='text-xs text-center lg:text-left lg:text-base text-wrap'>Empowers individuals to manage their time effectively, prioritize tasks, and leading to increased efficiency and accomplishment.</p>
              </div>
            </div>
            <div className="lg:h-[180px] rounded-lg bg-white border-2 border-solid 
            border-gray-900 shadow-md flex flex-col lg:flex-row items-center lg:justify-between py-[20px] px-[30px] gap-[20px] lg:gap-[50px]">
              <div className='shrink-0 bg-[#FF5E5E] rounded-full shadow-md w-[60px] h-[60px] border-2 border-solid border-black'>
                <img src={key} className='spin'></img>
              </div>
              <div className='flex flex-col'>
                <p className='text-lg text-center lg:text-left lg:text-3xl font-bold flex-none'>Accessibility</p>
                <p className='text-xs text-center lg:text-left lg:text-base text-wrap'>Offers a user-friendly interface and intuitive features, ensuring that users can easily utilize the platform to its fullest potential.</p>
              </div>
            </div>
            <div className="lg:h-[180px] rounded-lg bg-white border-2 border-solid 
            border-gray-900 shadow-md flex flex-col lg:flex-row items-center lg:justify-between py-[20px] px-[30px] gap-[20px] lg:gap-[50px]">
              <div className='shrink-0 bg-[#A6DEB7] rounded-full shadow-md w-[60px] h-[60px] border-2 border-solid border-black'>
                <img src={idea} className='spin'></img>
              </div>
              <div className='flex flex-col'>
                <p className='text-lg text-center lg:text-left lg:text-3xl font-bold flex-none'>Insight</p>
                <p className='text-xs text-center lg:text-left lg:text-base text-wrap'>Provides valuable insights into project timelines, enabling users to make informed decisions.</p>
              </div>
            </div>
          </div>
        </div >
      </section >
      <section id='about-us' className='bg-[#23A094] border-b border-black snap-start snap-always w-full flex 
        flex-col items-center relative'>
        <div className='w-full gap-[32px] flex flex-col lg:flex-row justify-between items-center pt-[64px] lg:max-w-[75%] lg:h-screen'>
          <div className="bg-[url('/kelvin.png')] h-[250px] lg:h-full w-full max-w-[250px] lg:max-h-[400px] lg:max-w-[400px] bg-no-repeat bg-center bg-cover profile-img border-[3px] border-black"></div>
          <p className='w-2/3 text-center lg:text-left lg:w-1/2 text-3xl pb-[100px] lg:pb-0'>“I created this website because I am having struggle myself in keeping all my tasks organized”</p>
        </div>
        <footer>
          <p>Made & Designed with &#10084;&#65039; by Kelvin Anderson | All Rights Reserved.</p>
        </footer>
      </section>

    </div >
  )
}

export default App
