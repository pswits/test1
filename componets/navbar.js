import { useState, useEffect } from 'react';
import '../app/globals.css';

function NavLink({ to, children }) {
  return <a href={to} className="mx-4">
    {children}
  </a>;
}

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <nav className="flex filter drop-shadow-md bg-black px-4 py-4 h-20 items-center">
        <div className="w-3/12 flex items-center">
          <a className="text-2xl font-semibold text-white" href="/">Reteriors</a>
        </div>
        <div className="w-9/12 flex justify-end items-center">
          <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => setOpen(!open)}>
            <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
            <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
            <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
          </div>
          {open && (
            <div className="absolute top-0 right-0 h-screen w-64 bg-black transform translate-x-full transition-transform duration-300 ease-in-out filter drop-shadow-md">
              <div className="flex flex-col ml-4">
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex filter drop-shadow-md bg-black px-4 py-4 h-20 items-center">
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold text-white" href="/">Reteriors</a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div className="hidden md:flex">
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </nav>
  );
}
