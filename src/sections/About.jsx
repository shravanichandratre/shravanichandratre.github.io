import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import {FrameWorks} from "../components/FrameWorks";

const About = () => {
  const grid2Container =useRef();
  return ( 
  <section id="about" className="c-space section-spacing">
    <h2 className="text-heading">About Me</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid 1
        <div className="flex items-end grid-default-color grid-1">
          <img 
            src="assets/me_nobg.png"
            //className="w-full h-full object-cover"

            className="absolute scale-[1.75] -right-[5rem] top-[50rem] md:scale-[0.5] md:left-1 md:inset-y-10 lg:scale-[1]"
          />
          <div className="z-10">
            <p className="headtext">
              Hi, I am Shravani!
            </p>
            <p className="subtext">
              I believe in working hard, being kind, and never stopping at “good enough.” Whether I am coding late into the night, sketching on my iPad, or brainstorming the next cool idea, I am always learning and always building.
            </p>

          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div> */}
        {/* grid 1 */}
<div className="relative flex flex-col-reverse items-center justify-center gap-y-8 p-6 md:flex-row md:items-end md:justify-center md:gap-x-12 lg:gap-x-20 xl:gap-x-28 grid-default-color grid-1 min-h-[calc(60vh-theme(space.20))] md:min-h-0">
  
  {/* Text Section */}
  <div className="z-10 max-w-2xl flex-shrink md:max-w-none md:flex-grow text-center md:text-left">
    <p className="headtext text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-4 text-white">Hi, I am Shravani!</p>
    <p className="subtext text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white">
      I believe in working hard, being kind, and never stopping at “good enough.” Whether I am coding late into the night, sketching on my iPad, or brainstorming the next cool idea, I am always learning and always building.
    </p>
  </div>

  {/* Image Section - MODIFIED */}
  <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0  
              md:absolute md:scale-[0.5] md:left-25 md:inset-y-10 lg:scale-[1] md:w-auto md:h-auto"> 
    <img
      src="assets/me_nobg.png"
      alt="Shravani"
      className="w-full h-full object-contain " 
    />
  </div>

  {/* Bottom Gradient */}
  <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
</div>
  

        {/* grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
            <Card style={{rotate: "75deg", top:"30%", left: "20%"}} text="GRASP" containerRef={grid2Container}/>
            <Card style={{rotate: "-30deg", top:"60%", left: "45%"}} text="SOLID" containerRef={grid2Container} />
            <Card style={{rotate: "90deg", top:"30%", left: "70%"}} text="Design Patterns" containerRef={grid2Container} />
            <Card style={{rotate: "-45deg", top:"55%", left: "0%"}} text="Design Principles" containerRef={grid2Container} />
            <Card style={{rotate: "20deg", top:"10%", left: "38%"}} text="SRP" containerRef={grid2Container} />

            <Card style={{rotate: "30deg", top:"70%", left: "70%"}} image="assets/logos/csharp-pink.png" containerRef={grid2Container} />
            <Card style={{rotate: "-45deg", top:"70%", left: "25%"}} image="assets/logos/donet-pink.png" containerRef={grid2Container} />
            <Card style={{rotate: "-45deg", top:"5%", left: "10%"}} image="assets/logos/blazor-pink.png" containerRef={grid2Container} />
           


          </div>
        </div>


        {/* grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext"> I am based in San Francisco Bay Area, and open to remotely work Worldwide</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>


        {/* grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>

        </div>


        {/* grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">
              Tech Stack
            </p>
            <p className="subtext">
              I specialize in variety of languages, frameworks and tools that allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <FrameWorks  />
          </div>
        </div>


    </div>
  </section>
  );
};

export default About;