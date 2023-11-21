import Image from 'next/image';

const fixtures = [
  {
    id: 1,
    image: 'https://example.com/image1.jpg',
    name: 'Fixture 1',
    discription: 'Fixture 1 discription',
    date: '2022-01-01',
  },
  {
    id: 2,
    image: 'https://example.com/image2.jpg',
    name: 'Fixture 2',
    discription: 'Fixture 2 discription',
    date: '2022-01-02',
  },
];

const LatestFixture = () => {
  return (
    <div className="container mx-auto bg-white p-5">
      <h2 className="text-xl font-bold mb-4">Latest Fixtures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fixtures.map((fixture) => (
          <div key={fixture.id} className="bg-gray-200 p-4 rounded-md shadow">
            <Image
              src={fixture.image}
              alt={fixture.name}
              width={100}
              height={100}
              className="w-full h-auto"
            />
            <h3 className="text-lg font-bold mt-2">{fixture.name}</h3>
            <p className="text-gray-600">{fixture.discription}</p>
            <p className="text-gray-600">Date: {fixture.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestFixture;
