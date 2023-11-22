import Fixture, { FixtureProps } from '../Fixture';

const LatestFixture = ({
  title,
  fixtures,
}: {
  title: string;
  fixtures: FixtureProps[];
}) => {
  return (
    <div className="container mx-auto bg-white px-4 md:px-0 py-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {fixtures.map((fixture) => (
          <Fixture key={fixture.id} {...fixture} />
        ))}
      </div>
    </div>
  );
};

export default LatestFixture;
