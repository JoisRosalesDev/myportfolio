import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById("navbar-default");
      const button = document.querySelector(
        '[data-collapse-toggle="navbar-default"]'
      );

      if (
        navbar &&
        button &&
        isMobileMenuOpen &&
        !navbar.contains(event.target) &&
        !button.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "#Hero", label: "Home" },
    { href: "#Skills", label: "Skills" },
    { href: "#Projects", label: "Projects" },
    { href: "#AboutMe", label: "About Me" },
  ];

  return (
    <header className="text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 m-4 rounded-2xl bg-bunker-950/40 backdrop-blur-lg border border-bunker-950/40 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="#hero"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img 
            className="size-14"
            src="/img/logo-plano.svg"
            decoding="async"
            alt="Logo" />
          </a>
          <button
            onClick={toggleMobileMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-bunker-200 rounded-xl lg:hidden hover:bg-bunker-900 transition duration-300"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full lg:block lg:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 hover:text-bunker-600 hover:scale-105 transition duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/docs/cv-jois.pdf"
                  download="cv-jois.pdf"
                  className="block p-2 rounded-xl border border-bunker-800/80 bg-bunker-600 text-bunker-50 hover:bg-bunker-700 hover:scale-105 transition duration-300"
                >
                  CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
