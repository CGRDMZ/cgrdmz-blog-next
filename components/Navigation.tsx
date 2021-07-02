import Logo from "./Logo";

export default function Navigation() {
  return (
    <>
      <div className="w-screen bg-gray-800">
        <nav className="w-screen sm:w-3/4 flex flex-row items-center mx-auto justify-between">
          <Logo />
          <ul className="text-white flex flex-row">
            <a href="#" className="pr-3 md:pr-5">About</a>
            <a href="#" className="pr-3 md:pr-5">Blog</a>
            <a href="#" className="pr-3 md:pr-5">Portfolio</a>
            <a href="#" className="pr-3 md:pr-5">Contact</a>
          </ul>
        </nav>
      </div>
    </>
  );
}
