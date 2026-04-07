import { Link } from "react-router-dom";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import ProductCard from "../components/ProductCard/ProductCard";
import Reveal from "../components/Reveal/Reveal";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import { menuItems } from "../data/menu";
import Home from "./Home";

const heroHighlights = [
  {
    title: "Slow-brewed tea",
    description: "Balanced bases with a smoother, cleaner finish.",
  },
  {
    title: "Creamy texture",
    description: "Rich milk layers that still feel light and polished.",
  },
  {
    title: "Cozy cafe mood",
    description: "Warm visuals that feel inviting at first glance.",
  },
];

export default function LandingPage() {
  const featuredItems = menuItems.filter((item) => item.featured).slice(0, 3);

  const scrollToSignature = () => {
    document
      .getElementById("signature-sips")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255, 226, 210, 0.94), transparent 34%), radial-gradient(circle at top right, rgba(214, 165, 116, 0.16), transparent 28%), radial-gradient(circle at bottom right, rgba(143, 164, 125, 0.14), transparent 26%), linear-gradient(135deg, rgba(255, 251, 245, 0.98), rgba(255, 240, 229, 0.9), rgba(247, 233, 216, 0.96))",
          }}
        />

        <div className="ambient-orb absolute left-[-4rem] top-28 h-32 w-32 bg-[rgba(255,217,195,0.52)]" />
        <div className="ambient-orb absolute right-[-2rem] top-20 h-36 w-36 bg-[rgba(168,189,142,0.18)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <Reveal className="space-y-8">
            <span className="eyebrow">Brewed for cozy afternoons</span>

            <div className="space-y-6">
              <h1 className="display-title text-[3.6rem] text-[var(--ink)] sm:text-[4.8rem] lg:text-[6.4rem]">
                Premium milk tea for soft sips and slower moments.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Enchantea turns comfort drinks into a polished cafe experience
                with creamy layers, warm color, and playful details that still
                feel refined.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/products" className="btn-primary">
                Explore the menu
                <FiArrowRight />
              </Link>
              <Link to="/aboutus" className="btn-secondary">
                Read our story
                <FiArrowRight />
              </Link>
            </div>

            <div className="glass-panel max-w-2xl p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brown-sugar)]">
                Why this works
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 90}
                  className="rounded-[22px] bg-white/72 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brown-sugar)]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </Reveal>
              ))}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToSignature}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brown-sugar)] transition duration-300 hover:translate-x-1"
            >
              See signature cups
              <FiChevronRight />
            </button>
          </Reveal>

          <Reveal direction="left">
            <div className="relative mx-auto w-full max-w-[34rem]">
              <div className="soft-card overflow-hidden p-4 shadow-[0_24px_56px_rgba(93,58,31,0.14)]">
                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src={featuredItems[0].image}
                    alt={featuredItems[0].name}
                    className="h-[26rem] w-full object-cover object-center sm:h-[32rem]"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                      Signature favorite
                    </p>
                    <p className="font-heading text-4xl text-[var(--ink)] sm:text-5xl">
                      {featuredItems[0].name}
                    </p>
                    <p className="max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {featuredItems[0].description}
                    </p>
                  </div>

                  <div className="rounded-[24px] bg-[var(--cream-deep)] px-5 py-4 text-center sm:min-w-[8rem]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                      Starts at
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-[var(--brown-sugar)]">
                      {featuredItems[0].price}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 border-t border-[rgba(141,92,59,0.12)] pt-5 sm:grid-cols-3">
                  <div className="rounded-[20px] bg-white/72 px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                      Texture
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[var(--ink)]">
                      Creamy and smooth
                    </p>
                  </div>
                  <div className="rounded-[20px] bg-white/72 px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                      Flavor note
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[var(--ink)]">
                      Caramel-rich finish
                    </p>
                  </div>
                  <div className="rounded-[20px] bg-white/72 px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                      Mood
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[var(--ink)]">
                      Cozy cafe energy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="signature-sips"
        className="content-auto px-4 py-20 sm:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-7xl space-y-12">
          <Reveal>
            <SectionHeading
              kicker="Signature Sips"
              title="Crowd favorites with a cleaner, more polished finish."
              description="These are the blends that best capture the Enchantea feel: creamy, layered, easy to love, and designed to stand out on the page and in the cup."
              align="center"
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredItems.map((item, index) => (
              <ProductCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <div className="content-auto">
        <Home />
      </div>

      <section className="content-auto px-4 pb-8 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[34px] px-8 py-10 text-white shadow-[0_20px_48px_rgba(93,58,31,0.18)] sm:px-10 lg:px-14 lg:py-14"
              style={{
                background:
                  "linear-gradient(135deg, rgba(79, 51, 33, 0.98), rgba(141, 92, 59, 0.96), rgba(215, 165, 116, 0.92))",
              }}
            >
              <div className="ambient-orb absolute left-0 top-0 h-36 w-36 bg-[rgba(255,255,255,0.14)]" />
              <div className="ambient-orb absolute bottom-0 right-0 h-44 w-44 bg-[rgba(255,255,255,0.1)]" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl space-y-4">
                  <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.34em] text-white/86">
                    Cozy, polished, memorable
                  </span>
                  <h2 className="font-heading text-5xl leading-none text-white sm:text-6xl">
                    Built to feel portfolio-worthy, but still warm enough to
                    invite a second visit.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                    The refreshed Enchantea experience pairs premium visuals
                    with softer motion, stronger hierarchy, and product moments
                    that feel more intentional across desktop and mobile.
                  </p>
                </div>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[var(--espresso)] transition duration-300 hover:-translate-y-1 hover:bg-[#fff1e1]"
                >
                  Start with the menu
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
