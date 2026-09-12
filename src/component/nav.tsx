import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img
            src={logo}
            alt="Logo"
            className="w-36 hover:opacity-80 transition duration-300"
          />
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li>
            <a
              href="#"
              className="text-[#DB2777] font-semibold hover:text-[#b81769] transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-[#DB2777] transition duration-300"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-[#DB2777] transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-[#DB2777] transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-[#DB2777] transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-100 hover:text-[#D91B7E] transition-all duration-300">
            Sign In
          </button>

          <button className="px-5 py-2.5 text-sm font-semibold text-white bg-[#D91B7E] rounded-xl shadow-md shadow-pink-200 hover:bg-[#b81769] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
