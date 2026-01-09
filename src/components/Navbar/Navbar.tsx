interface NavLink {
  name: string;
  href: string;
}

// Create an array of nav links
const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Navbar functional component
function Navbar() {
  return (
    <nav className="w-full bg-orange-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left side: Name/Logo */}
          <div className="flex-shrink-0 text-2xl font-extrabold">
            Dyslex1k
          </div>

          {/* Right side: Nav links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium transition-all duration-300 ease-in-out hover:text-red-400 hover:scale-105"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button (for small screens) */}
          <div className="md:hidden">
            <button className="text-white hover:text-orange-400 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
