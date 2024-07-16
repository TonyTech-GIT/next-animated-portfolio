import Image from "next/image";

import heroImage from "../../public/hero.png";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER WRAPPER */}
      {/* <div className="w-1/2 relative">
        
      </div> */}

      {/* IMAGE CONTAINER */}
      <div className=" h-64 lg:h-auto w-full lg:w-1/2 relative">
        <Image
          src={heroImage}
          alt="hero-image"
          fill
          // objectFit="contain"
          className="object-contain"
        />
      </div>

      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-auto lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow
        </h2>

        {/* DESC */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity coverge.
          With a keen eye for aesthetics and a mastery of code, my portfolio
          showcases a diverse collection of projects that refelct my commitment
          to excellence.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 w-full">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
