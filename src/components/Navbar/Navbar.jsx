import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/aboutus" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/aboutus") {
      return (
        location.pathname === "/aboutus" || location.pathname === "/about"
      );
    }

    return location.pathname === path;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
      <div
        className={`nav-blur mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 px-4 py-3 transition duration-500 sm:px-6 ${
          isScrolled || location.pathname !== "/"
            ? "bg-white/76 shadow-[0_18px_48px_rgba(97,60,34,0.14)]"
            : "bg-white/58 shadow-[0_14px_38px_rgba(97,60,34,0.1)]"
        }`}
      >
        <Link to="/" className="inline-flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--espresso)] text-lg text-[#f8dcc1] shadow-[0_12px_30px_rgba(88,55,32,0.18)]">
            <LuLeaf />
          </span>
          <span className="font-heading text-3xl text-[var(--ink)] sm:text-4xl">
            Enchantea
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                isActive(link.to)
                  ? "bg-[var(--blush)] text-[var(--brown-sugar)]"
                  : "text-[var(--ink)] hover:bg-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/products" className="btn-primary !px-5 !py-3 !text-sm">
            Order a sip
            <FiArrowRight />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/72 text-xl text-[var(--ink)] transition duration-300 hover:bg-white md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`mt-3 transition duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="nav-blur overflow-hidden rounded-[30px] border border-white/70 bg-white/86 p-4 shadow-[0_24px_60px_rgba(97,60,34,0.12)]">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-[22px] px-4 py-3 text-sm font-semibold transition duration-300 ${
                  isActive(link.to)
                    ? "bg-[var(--blush)] text-[var(--brown-sugar)]"
                    : "text-[var(--ink)] hover:bg-[var(--cream-deep)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/products"
            className="btn-primary mt-4 w-full justify-center text-sm"
          >
            Explore the menu
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </header>
  );
}
