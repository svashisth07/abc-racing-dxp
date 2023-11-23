'use client';
import { CldImage } from 'next-cloudinary';

export interface DriverProps {
  id: string;
  name: string;
  team: string;
  slug: string;
  photo: {
    secure_url: string;
  };
}

const Driver = ({ id, photo, name, team }: DriverProps) => {
  return (
    <div className="bg-white p-16 rounded-md shadow flex flex-col items-center cursor-pointer">
      <div className="relative w-28 h-28 mb-4 rounded-full">
        <CldImage
          src={photo.secure_url}
          width={112}
          height={112}
          alt={name}
          className="rounded-full"
        />
      </div>
      <div className="text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600 text-lg">{team}</p>
      </div>
    </div>
  );
};

export default Driver;
