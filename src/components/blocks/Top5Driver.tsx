import Image from 'next/image';

interface DriverProps {
  id: string;
  name: string;
  team: string;
  slug: string;
  photo: {
    secure_url: string;
  };
}

const Top5Driver = ({
  title,
  drivers,
}: {
  title: string;
  drivers: DriverProps[];
}) => {
  return (
    <div className="container mx-auto bg-white px-4 md:px-0 py-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {drivers.map((racer) => (
          <div
            key={racer.id}
            className="bg-white p-16 rounded-md shadow flex flex-col items-center cursor-pointer"
          >
            <div className="relative w-28 h-28 mb-4 rounded-full">
              <Image
                src={racer.photo.secure_url}
                alt={racer.name}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">{racer.name}</h3>
              <p className="text-gray-600 text-lg">{racer.team}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top5Driver;
