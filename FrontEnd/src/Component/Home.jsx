import React, { useRef } from "react";
import NavBare from "./NavBare";
import Search from "./SearchBare";
import Slide from "./Slide";
import HomeBg from "../assets/images/bg-home.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import DownAroow from "../assets/images/down-arrow-svgrepo-com.svg";
import { useEffect } from "react";
import { useState } from "react";
import Events from "./BooksData(test)/EventsData";
import EventsSection from "./BooksData(test)/EventsSection";
import serachLogo from "../assets/images/search-svgrepo-com.svg";

function Home(props) {
  // define parrallaxref to  set which page do we need to go
  const parallaxRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const width = window.innerWidth;
  console.log(width);
  const goToSecondPage = () => {
    if (width <= 430) {
      parallaxRef.current.scrollTo(2);
     
    } else {
      parallaxRef.current.scrollTo(0.8);
    }
  };
  // temporarly array   of the events  for the test
  const result = Events.map((element, index) => {
    return <EventsSection key={element.id} item={element} />;
  });
  console.log(result);

  // Map in the event array to display it //

  return (
    <Parallax pages={2} ref={parallaxRef}>
      <ParallaxLayer offset={0} speed={0} factor={1 / 2}>
      <NavBare/>
        <div className="">
          <div>
            <div className="flex items-center justify-center mt-4">
              <h1 className="text-2xl ls leading-xl mt-2 font">
                Bienvenue à La Bibliothèque <br />
                <span className="text-red-700">De La Faculté Des Sciences</span>
              </h1>
            </div>
            <Search />
          </div>
          <div className="mt-5">
            <h1 className="text-center text-[20px] font-semibold pb-2">
              Livres tendances
            </h1>
            <Slide />
            <div className="flex items-center justify-center mt-5 py-2">
              <button className="py-2 text-center text-white mt-2 px-5 rounded-md bg-red-700 flex justify-center item-center ">
                Voir Plus
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
                  onClick={goToSecondPage}
                />
              </button>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1}>
        <div className="">
          <div className="sm:flex sm:justify-center sm:items-center sm:pt-   h-screen sm:mt-24 ">
            <div className="sm:flex sm:flex-row  flex-col ">
              <div className="relative pb-2">
                <div className="absolute flex-col text-white sm:w-1/2 px-4 ml-20 rounded-xl sm:mt-14   mt-10 shadow-xl opacity-70 inline-flex w-auto sm:py-10 ">
                  <p className="text-4xl font-semibold">About us</p>
                  <p className="pb-2 tracking-wide py-3 ">
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
                <img
                  src={HomeBg}
                  className="sm:bg-cover sm:opacity-100 sm:h-full   bg-cover h-[600px]   "
                  alt="Background"
                />
                <div className="bg-[#E0E0E0] h-screen  ">
                  <div>
                    <p className="text-red-700  text-2xl  text-center py-2 pt-10">
                      Library news{" "}
                    </p>
                    <div className="mt-5">
                      <div className="px-4 ">
                        <h1 className="text-xl pb-2 text-center">
                          we have more than +1000 books
                        </h1>
                        <p className="px-4">
                          Explore 1000+ books in Computer Science, Chemistry,
                          and Mathematics. Dive into coding, chemical reactions,
                          and equations. Join us for endless learning
                          opportunities!
                        </p>
                        <div className="mb-2 text-center">
                          {" "}
                          <a href="#" className="text-red-700">
                            read more>>
                          </a>
                        </div>
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;
