// Navbar.tsx
import { NavLink, type INavLink } from "../Navbar/NavLink/NavLink" // Ensure path is correct

const title: INavLink = {
  name: "Dyslex1k",
  href: "#home"
}

const navLinks: INavLink[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="fixed w-full">
      <div className="max-w-7xl mx-auto px-10 py-6">
        <div className="flex justify-between items-center h-12">
          <div className="w text-2xl font-bold">
            <NavLink key={title.name} {...title}/>
          </div>

          <div className="space-x-6 text-white font-semibold">
            {navLinks.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;