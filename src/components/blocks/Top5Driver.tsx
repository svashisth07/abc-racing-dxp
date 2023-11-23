import Driver, { DriverProps } from '../client/Driver';

const Top5Driver = ({
  title,
  drivers,
}: {
  title: string;
  drivers: DriverProps[];
}) => {
  return (
    <div
      id="top-5-racers"
      className="container mx-auto bg-white px-4 md:px-0 py-8"
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {drivers.map((driver) => (
          <Driver key={driver.id} {...driver} />
        ))}
      </div>
    </div>
  );
};

export default Top5Driver;
