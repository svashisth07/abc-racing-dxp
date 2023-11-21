import Image from 'next/image';

const Top5Racers = () => {
  // Sample data for top 5 racers
  const racers = [
    {
      id: 1,
      name: 'John Doe',
      achievements: '5-time champion',
      profileImage: 'https://dummyimage.com/200x200',
    },
    {
      id: 2,
      name: 'Jane Smith',
      achievements: 'Fastest lap record',
      profileImage: 'https://dummyimage.com/200x200',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      achievements: 'Most podium finishes',
      profileImage: 'https://dummyimage.com/200x200',
    },
    {
      id: 4,
      name: 'Sarah Davis',
      achievements: 'Youngest racer',
      profileImage: 'https://dummyimage.com/200x200',
    },
    {
      id: 5,
      name: 'Alex Wilson',
      achievements: 'Most improved racer',
      profileImage: 'https://dummyimage.com/200x200',
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Top 5 Racers</h2>
      {racers.map((racer) => (
        <div
          key={racer.id}
          className="bg-gray-100 p-4 rounded-md mb-4 flex items-center"
        >
          <div className="relative w-16 h-16 rounded-full mr-4">
            <Image
              src={racer.profileImage}
              fill
              alt="Racer"
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="font-bold">{racer.name}</h3>
            <p className="text-gray-500">{racer.achievements}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top5Racers;
