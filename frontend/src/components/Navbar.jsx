import { useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-violet-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
            AM
          </div>

          <span className="hidden text-lg font-semibold tracking-tight text-white sm:block">
            Amar<span className="text-blue-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                index === 0
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}

              {/* Active underline */}
              {index === 0 && (
                <span className="absolute -bottom-5 left-0 h-px w-full bg-blue-400" />
              )}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="group flex h-10 w-16 items-center justify-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-slate-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-yellow-400 shadow-sm transition-all duration-300">
              {darkMode ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </span>
          </button>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Resume
            <Download
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-125 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5">

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/5 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4">

            <button
              onClick={toggleTheme}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-3 text-sm text-slate-300"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <a
              href="/resume.pdf"
              download
              onClick={handleNavClick}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-500 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400"
            >
              <Download size={17} />
              Resume
            </a>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;