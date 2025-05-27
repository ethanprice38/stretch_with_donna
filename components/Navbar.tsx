export default function Navbar() {
  return (
    <nav className="fixed top-0 z-10 rounded-sm w-[100%] bg-[#FAF9F6] hover:border-[#93b075] hover:border-b-3 text-text p-4 flex justify-center transition-all duration-100 ease-in-out">
      <ul className="flex gap-10">
        <li>
          <a
            href="/"
            className="hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/services"
            className="hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
