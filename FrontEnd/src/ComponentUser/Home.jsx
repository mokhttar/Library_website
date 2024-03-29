import React, { useRef } from "react";
import NavBare from "./NavBare";
import Search from "./SearchBare";
import Slide from "./Slide";
import HomeBg from "../assets/images/luisa-brimble-VfHoMBagDPc-unsplash.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import DownAroow from "../assets/images/down-arrow-svgrepo-com.svg";
import { useEffect } from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import HeroSection from "../LandingPage/HeroSection";
import { createContext } from "react";
import { Hidden } from "@mui/material";

// working on phones and working on computers still tablet and medium  devices
//850 px

export const ScrollContext = createContext();

function Home(props) {
  // define parrallaxref to  set which page do we need to go
  const parallaxRef = useRef();
  // A state to set the width of the page in it
  const [width, setWidth] = useState(window.innerWidth);
  const [height,setHeight] = useState(window.innerHeight)
  const [isVisible, setIsVisible] = useState(false);
  const [pages,setPages] = useState (2.5);
  const [count, setCount] = useState(0);
  // state to sett the number of pages of the parrallax
  const gotoAboutUs = () => {
    setIsVisible((prValue) => true);
    parallaxRef.current.scrollTo(1.4);
    //console.log("context passed");
  };

  const goToSearchBook = () => {
    parallaxRef.current.scrollTo(0.6);
  };
  const NumberPages = () => {
    setWidth(window.innerWidth);
  };

  // a use effect to keep tracking the width of the page and scroll vertecly and update the height with value
  useEffect(() => {
    addEventListener("resize", NumberPages);
  }, [width]);
  removeEventListener("resize", NumberPages);

  // a use effect to keep tracking of the scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible((preValue) => true);
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

//get width and handle offset  and pages  using the width(RESPONSIVE)
  const [scrollY, setScrollY] = useState(window.scrollY);
  //react spring
  //only working in large devices remember to make responsive to oother devices Creat some break point and test with the width of devices
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(1000px)",
    config: { delay: 3000 },
  });
  // conf for the second parallax page
  const configue2 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(575px)" : "translateX(100px)",
    config: { delay: 3000 },
  });
  // default   pages 2.5    offset0 0 offset 1 1 offset 2 1.99
  console.log(width)

  return (
    <div className=" overflow-hidden">
    <Parallax pages={width<500?3.099:2.5} ref={parallaxRef} style={{overflow:Hidden}}>
      <ScrollContext.Provider value={{ gotoAboutUs, goToSearchBook }}>
        <ParallaxLayer offset={0} speed={0} factor={1}>
          <NavBare />

          {/* hero section */}
          <section className="mt-10 xl:mt-40">
          <HeroSection />
          </section>
     
          {/* End HeroSection */}
          {/* Start Trend books and search Section */}
          <ParallaxLayer offset={width<500&&height<700?1.5:1} speed={0.4} factor={1} className="">
            <div className="">
              <div>
                <div className="flex items-center justify-center mt-4 pt-3">
                  <h1 className="text-2xl ls leading-xl mt-2 font text-center text-pretty">
                    Bienvenue à La Bibliothèque <br />
                    <span className="text-red-700">
                      De La Faculté Des Sciences
                    </span>
                  </h1>
                </div>
                <Search />
              </div>
              <div className="mt-5">
                <h1 className="text-center text-[20px] font-semibold pb-2 ">
                  Livres tendances
                </h1>
                <Slide />
                <div className="flex items-center justify-center mt-5 py-2">
                  <button className="py-2 text-center text-white mt-2 px-5 rounded-md bg-red-700  flex justify-center item-center  hover:bg-red-600">
                    See more
                  </button>
                </div>
                <div className="flex justify-center items-center py-2">
                  <button className=" text-center flex justify-center item-center pb-2 sm:mt-4 ">
                    {" "}
                    <img
                      src={DownAroow}
                      alt=""
                      width={30}
                      className=" animate-bounce"
                      onClick={gotoAboutUs}
                    />
                  </button>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          {/* End trend Books and search section */}
          <ParallaxLayer offset={width<500&&height<700? 2.2 :1.999} speed={1} factor={1}>
            <div className="relative flex items-center justify-center h-screen mt-2    ">
              <img
                src={HomeBg}
                className="absolute inset-0 w-full h-screen object-cover"
                alt="Background"
              />

              <div className="absolute flex flex-col mt-10 justify-center  items-center sm:justify-start sm:items-start   sm:top-10 top-2 px-4  text-white">
                <div className="text-start bg-opacity-80 bg-black sm:w-1/2 px-5 rounded-xl py-2 opacity-95">
                  <p className="text-4xl font-semibold ">About us</p>
                  <p className="pb-2 tracking-wide py-3  text-white">
                    Explorez notre incroyable collection de livres qui regorge
                    de trésors littéraires et de connaissances variées, et
                    empruntez-les en ligne en seulement quelques clics. Que vous
                    soyez passionné par les classiques intemporels ou curieux
                    des dernières avancées en recherche, notre bibliothèque
                    virtuelle a tout ce qu'il vous faut pour exceller dans vos
                    études et élargir vos horizons intellectuels. Rejoignez-nous
                    dès maintenant pour enrichir votre esprit, découvrir de
                    nouveaux horizons et nourrir votre soif de savoir. Que
                    l'aventure de la connaissance commence dès aujourd'hui!
                  </p>
                </div>

                <animated.div style={springProps}>
                  <div className="sm:w-1/2 mt-5 bg-black bg-opacity-70 opacity-95 rounded-xl pb-4  ml-2 ">
                    <h1 className="text-4xl font-semibold sm:ml-2 py-4 opacity-95  px-2   ">
                      Library news
                    </h1>
                    <p className="ml-4"> we have more than +1000Books</p>
                    <p className="px-4 py-2 pb-5">
                      Explore 1000+ books in Computer Science, Chemistry, and
                      Mathematics. Dive into coding, chemical reactions, and
                      equations. Join us for endless learning opportunities!
                    </p>
                  </div>
                </animated.div>
                <div className="bg-black  bg-opacity-70   mt-4 hidden sm:block  p-4 rounded-lg sm:hidden text-white">
                  <div className="text-center ">
                    <span className="text-3xl font-semibold    py-2 text-start">
                      Start your journey of knowledge{" "}
                    </span>
                  </div>{" "}
                  Explore a world of knowledge and enrichment at the University
                  of Setif 1 library's diverse events. From lectures to book
                  clubs, our events offer learning, networking, and cultural
                  engagement opportunities. Join us in exploring new ideas and
                  expanding your horizons!.
                </div>
              </div>

              <div className="absolute inset-0 mt-12 sm:justify-end px-2 top-10 sm:items-start   ml-24  hidden sm:flex">
                <div className="bg-black  bg-opacity-70 w-1/2 pb-20 pt-20  mt-8  px-4 mr-5 rounded-lg text-white">
                  <div className="text-start py-2 e">
                    <span className=" text-3xl font-semibold   ml-1  text-start ">
                      Start your journey of knowledge{" "}
                    </span>
                  </div>{" "}
                  Discover a world of knowledge and enrichment at the University
                  of Setif 1 library's events. Our library hosts a diverse range
                  of events throughout the year, offering unique opportunities
                  for learning, networking, and cultural engagement. From
                  informative lectures and workshops to book clubs and author
                  talks, our events cater to various interests and disciplines.
                  Whether you're a student, faculty member, or a curious
                  community member, you'll find something exciting and enriching
                  to participate in. Stay updated with our upcoming events
                  schedule to make the most out of your library experience. Join
                  us in exploring new ideas, fostering intellectual discussions,
                  and expanding your horizons at the University of Setif 1
                  library.
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </ParallaxLayer>
      </ScrollContext.Provider>
    </Parallax>
    </div>
  );
}
export default Home;




