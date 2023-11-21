import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-[40vh] md:h-screen">
      <div className="absolute inset-0">
        <Image
          src="/hero.avif"
          alt="Racing Hero"
          loading="eager"
          width={1200}
          height={800}
          layout="responsive"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50 h-full"></div>
      <div className="container mx-auto relative flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
          Experience the Thrill of Racing
        </h1>
        <p className="text-white md:text-lg mb-8">
          Watch the most exciting moments on the track
        </p>
        <a
          href="#"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Book your tickets now
        </a>
      </div>
    </div>
  );
};

export default Hero;
