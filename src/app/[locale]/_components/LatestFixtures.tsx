import Image from 'next/image';

const LatestFixtures = () => {
  // Sample data for fixtures
  const fixtures = [
    {
      id: 1,
      team1: 'Team A',
      team2: 'Team B',
      date: '2022-10-01',
      time: '15:00',
      image: 'https://dummyimage.com/200x200',
      location: 'Stadium XYZ',
      city: 'City ABC',
    },
    {
      id: 2,
      team1: 'Team C',
      team2: 'Team D',
      date: '2022-10-02',
      time: '18:30',
      image: 'https://dummyimage.com/200x200',
      location: 'Stadium PQR',
      city: 'City XYZ',
    },
    {
      id: 3,
      team1: 'Team E',
      team2: 'Team F',
      date: '2022-10-03',
      time: '20:00',
      image: 'https://dummyimage.com/200x200',
      location: 'Stadium LMN',
      city: 'City DEF',
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Latest Fixtures</h2>
      {fixtures.map((fixture) => (
        <div
          key={fixture.id}
          className="bg-gray-100 p-4 rounded-md mb-4 flex items-center justify-between"
        >
          <div className="flex items-center">
            <Image
              src={fixture.image}
              alt="Fixture"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold">
                {fixture.team1} vs {fixture.team2}
              </h3>
              <p className="text-gray-500">
                {fixture.location}, {fixture.city}
              </p>
            </div>
          </div>
          <div className="text-gray-500">
            {fixture.date} - {fixture.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestFixtures;
