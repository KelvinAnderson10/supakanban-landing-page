import { useEffect } from "react";
import "./index.css";

import kanban from "/kanban.png";
import efficiency from "/efficiency.png";
import idea from "/idea.png";
import key from "/key.png";
import stopwatch from "/stopwatch.png";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const scrollSmoothTo = (element) => {
    document.getElementById(element).scrollIntoView(true);
  };

  return (
    <div
      className="flex h-screen  flex-col items-center overflow-y-auto scroll-smooth
      lg:snap-y lg:snap-mandatory"
    >
      {/* Navbar */}
      <div
        className="fixed top-[5%] z-50 flex w-full max-w-[90%] items-center justify-between rounded-2xl 
        border-2 border-gray-900 bg-white 
        px-4 py-3 shadow-md 
        lg:max-w-[75%] lg:px-16 lg:py-3"
      >
        {/* Navbar (Left container) */}
        <div
          className="flex w-full items-center justify-between 
          lg:w-max lg:items-center lg:justify-center lg:gap-[32px]"
        >
          <a
            onClick={() => scrollSmoothTo("home")}
            className="mr-6 text-[24px] font-bold text-red-600"
          >
            SupaKanban
          </a>
          <a onClick={() => scrollSmoothTo("home")} className="nav-link">
            Home
          </a>
          <a onClick={() => scrollSmoothTo("feature")} className="nav-link">
            Features
          </a>
          <a onClick={() => scrollSmoothTo("about-us")} className="nav-link">
            About Us
          </a>
          <button
            className="duration-250 inline cursor-pointer text-nowrap rounded-md border-2 
            border-black bg-[#FFECA8] px-5 py-2 font-medium text-black shadow-md
            transition ease-in-out hover:shadow-none lg:hidden"
          >
            Start !
          </button>
        </div>
        <div>
          <button
            className="lg:duration-250 hidden lg:block lg:cursor-pointer lg:rounded-md lg:border-2 
            lg:border-black lg:bg-[#FFECA8] lg:px-5 lg:py-2 lg:font-medium lg:text-black 
            lg:shadow-md lg:transition lg:ease-in-out lg:hover:shadow-none"
          >
            Get Started Now !
          </button>
        </div>
      </div>
      {/* Home Section */}
      <section id="home" className="bg-[#BD9EEB]">
        <div
          className="flex w-full flex-col items-center justify-end pt-[150px] 
          lg:h-screen lg:max-w-[75%] lg:flex-row lg:items-center lg:justify-between lg:pt-[5%]"
        >
          {/* Home Illustration (Left) */}
          <div className="max-w-[250px] lg:max-w-[450px]">
            <img
              src={kanban}
              data-aos="zoom-in-right"
              data-aos-duration="1200"
              alt="Vite logo"
            />
          </div>
          {/* Home (Right) */}
          <div
            className="flex max-w-[80%] flex-col items-center text-wrap py-8 
            lg:w-1/2 lg:max-w-full lg:items-start lg:justify-center lg:py-0"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <p className="text-center text-[48px] font-bold leading-tight lg:text-left">
              SupaKanban As Your Ultimate Task Manager
            </p>
            <p className="mt-6 text-center text-[20px] lg:text-left">
              Having struggle keeping all your tasks ? No worries !
            </p>
            <p className="mb-8 mt-2 text-center text-[20px] lg:text-left">
              Manage all your tasks all in a single website, with a simple
              interactive drag and drop. &#10084;&#65039;
            </p>
            <div className="hidden lg:flex lg:gap-3">
              <input
                className="rounded-md border-2 border-black bg-white px-5 
                py-2 text-base font-medium text-black shadow-sm focus:outline-none"
                placeholder="Your Email Address"
              ></input>
              <button
                className="duration-250 cursor-pointer rounded-md border-2 
                border-black bg-[#FFECA8] px-5 py-2 font-medium text-black 
                shadow-md transition ease-in-out hover:shadow-none"
              >
                Sign Up - Forever free!
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section */}
      <section id="feature" className="bg-[#EFCFAF]">
        <div
          className="flex w-full max-w-[80%] flex-col items-center justify-center gap-[32px] pt-[80px] lg:h-screen 
          lg:max-w-[75%] lg:flex-row"
        >
          {/* WHY SUPAKANBAN TEXT */}
          <p
            className="text-center text-[40px] font-semibold uppercase 
            text-[#A37059] lg:rotate-180 lg:[writing-mode:vertical-rl]"
          >
            WHY SUPAKANBAN
          </p>
          {/* GRID (4 CONTAINER) */}
          <div
            className="grid w-full grid-cols-2 justify-between gap-x-[8px] gap-y-[32px] pb-8 
            lg:gap-x-[24px] lg:py-0 lg:pb-0"
          >
            <div className="card">
              <div className="icon bg-[#DD7DFF]">
                <img src={efficiency} className="spin"></img>
              </div>
              <div className="flex flex-col">
                <p className="card-title">Efficiency</p>
                <p className="card-description">
                  Enables users to efficiently structure tasks, projects, and
                  ideas, reducing clutter and enhancing clarity in their
                  workflows.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="icon bg-[#FFB443]">
                <img src={stopwatch} className="spin"></img>
              </div>
              <div className="flex flex-col">
                <p className="card-title">Productivity</p>
                <p className="card-description">
                  Empowers individuals to manage their time effectively,
                  prioritize tasks, and leading to increased efficiency and
                  accomplishment.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="icon bg-[#FF5E5E]">
                <img src={key} className="spin"></img>
              </div>
              <div className="flex flex-col">
                <p className="card-title">Accessibility</p>
                <p className="card-description">
                  Offers a user-friendly interface and intuitive features,
                  ensuring that users can easily utilize the platform to its
                  fullest potential.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="icon bg-[#A6DEB7]">
                <img src={idea} className="spin"></img>
              </div>
              <div className="flex flex-col">
                <p className="card-title">Insight</p>
                <p className="card-description">
                  Provides valuable insights into project timelines, enabling
                  users to make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us" className="relative bg-[#23A094]">
        <div
          className="flex w-full flex-col items-center justify-between gap-[32px] pt-[64px] lg:h-screen 
          lg:max-w-[75%] lg:flex-row"
        >
          <div
            className="profile-img h-[250px] w-full max-w-[250px] 
            border-[3px] border-black bg-[url('/kelvin.png')] bg-cover bg-center bg-no-repeat
            lg:h-full lg:max-h-[400px] lg:max-w-[400px]"
          ></div>
          <div className="flex w-2/3 flex-col gap-4 pb-[100px] lg:w-1/2  lg:pb-0">
            <p className="text-center text-3xl lg:text-left">
              "Through this platform, we aim to facilitate seamless task
              management for all users.”
            </p>
            <p className="text-center text-xl lg:text-left">
              - Founder of SupaKanban
            </p>
          </div>
        </div>
        <footer>
          <p>Made with &#10084;&#65039; - All Rights Reserved.</p>
        </footer>
      </section>
    </div>
  );
};

export default App;
