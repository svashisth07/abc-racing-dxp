const Hero = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <video
        src="https://static.myconnect.ae/-/media/yasconnect/project/fwad/videos/ranveer2022.mp4" // Replace with your video URL
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto lg:h-[720px] object-cover relative lg:absolute top-0 left-0 bottom-0"
      />
      <div className="relative h-[250px] lg:h-[720px] flex flex-col item-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-white text-3xl lg:text-6xl font-bold mb-4">
            Experience the Thrill of Racing
          </h1>
          <p className="text-white text-lg lg:text-xl mb-8">
            Watch the most exciting moments on the track
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Book you tickets now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
