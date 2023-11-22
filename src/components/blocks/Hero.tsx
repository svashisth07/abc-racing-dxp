import { PageQueryResponse } from '@/types/query';

const Hero = ({
  hero: { button, video },
  title,
  subTitle,
}: {
  hero: PageQueryResponse['page']['hero'];
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <video
        src={video.secure_url}
        autoPlay
        loop
        muted
        playsInline
        className="w-full min-h-[220px] h-auto lg:min-h-[720px] lg:h-[720px] object-cover relative lg:absolute top-0 left-0 bottom-0"
      />
      <div className="relative h-[250px] lg:h-[720px] flex flex-col item-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-white text-3xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-white text-lg lg:text-xl mb-8">{subTitle}</p>
          <a
            href="#"
            className="bg-white text-black lg:bg-black lg:text-white font-bold py-3 px-6 shadow rounded-full transition duration-300"
          >
            {button.label}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
