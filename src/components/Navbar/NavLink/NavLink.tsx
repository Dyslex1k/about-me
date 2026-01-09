// NavLink.tsx
export interface INavLink {
  name: string;
  href: string;
}

export function NavLink({ name, href }: INavLink) {
  return (
    <a
      href={href}
      className="transition-all duration-300 ease-in-out inline-block hover:text-orange-500 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"
    >
      {name}
    </a>
  );
}