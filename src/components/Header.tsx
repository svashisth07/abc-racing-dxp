import LocaleSwitcher from './LocaleSwitcher';

const Header = () => {
  return (
    <header className="bg-black py-4">
      <div className="container mx-auto flex items-center justify-around">
        <h1 className="text-white text-2xl font-bold">ABC Racing</h1>
        <LocaleSwitcher />
      </div>
    </header>
  );
};

export default Header;
