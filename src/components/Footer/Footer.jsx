import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { FiArrowRight, FiClock, FiMapPin } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import Reveal from "../Reveal/Reveal";

const socialLinks = [
  { id: "instagram", icon: <FaInstagram />, href: "#" },
  { id: "facebook", icon: <FaFacebookF />, href: "#" },
  { id: "twitter", icon: <FaTwitter />, href: "#" },
  { id: "tiktok", icon: <FaTiktok />, href: "#" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/aboutus" },
];

const menuLinks = [
  "Brown Sugar Velvet",
  "Matcha Cloud Latte",
  "Wintermelon Silk",
  "Lychee Rose Cooler",
];

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-[var(--espresso)] px-6 py-10 text-white shadow-[0_26px_80px_rgba(63,37,20,0.26)] sm:px-8 lg:px-10">
            <div className="ambient-orb absolute -left-12 top-6 h-40 w-40 bg-[rgba(255,214,179,0.22)]" />
            <div className="ambient-orb absolute bottom-0 right-0 h-56 w-56 bg-[rgba(160,184,128,0.18)]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_.7fr_.8fr_.9fr]">
              <div className="space-y-6">
                <Link to="/" className="inline-flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-xl text-[#f7dfbe]">
                    <LuLeaf />
                  </span>
                  <span className="font-heading text-4xl tracking-[0.02em]">
                    Enchantea
                  </span>
                </Link>

                <p className="max-w-md text-base leading-8 text-white/78">
                  Premium milk tea with a warm cafe mood, a playful polish, and
                  enough softness to make every sip feel like a small reset.
                </p>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--espresso)] transition duration-300 hover:-translate-y-1 hover:bg-[#fff2e5]"
                >
                  Browse the menu
                  <FiArrowRight />
                </Link>

                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      aria-label={social.id}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-lg text-white/80 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/18 hover:text-white"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#efcfab]">
                  Navigate
                </h3>
                <div className="flex flex-col gap-3 text-white/76">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="transition duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#efcfab]">
                  Signature Sips
                </h3>
                <div className="flex flex-col gap-3 text-white/76">
                  {menuLinks.map((label) => (
                    <p key={label}>{label}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#efcfab]">
                  Cafe Rhythm
                </h3>
                <div className="space-y-4 text-white/76">
                  <div className="flex items-start gap-3">
                    <FiClock className="mt-1 text-[#f0c88c]" />
                    <p>Freshly brewed all day with warm, made-to-order finishes.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiMapPin className="mt-1 text-[#f0c88c]" />
                    <p>Designed to feel like your favorite cozy corner table.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-10 border-t border-white/12 pt-6 text-sm text-white/58">
              Copyright {new Date().getFullYear()} Enchantea. Crafted for soft
              sips and slower moments.
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
