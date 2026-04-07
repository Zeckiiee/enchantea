import { Link } from "react-router-dom";
import { FiArrowRight, FiClock, FiCoffee, FiHeart } from "react-icons/fi";
import imageA from "../assets/pictures/imageA.jpg";
import imageB from "../assets/pictures/imageB.jpg";
import imageC from "../assets/pictures/imageC.jpg";
import imageD from "../assets/pictures/imageD.jpg";
import Reveal from "../components/Reveal/Reveal";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const rituals = [
  {
    icon: <FiCoffee />,
    title: "Premium layering",
    description:
      "We style each drink with soft contrast, clean toppings, and a richer dessert-like finish.",
  },
  {
    icon: <FiClock />,
    title: "Slow-made details",
    description:
      "From tea base to add-ons, every element is built to feel fresh, thoughtful, and worth the pause.",
  },
  {
    icon: <FiHeart />,
    title: "Warm cafe energy",
    description:
      "The mood is bright, creamy, and welcoming, with enough polish to feel elevated without losing its charm.",
  },
];

export default function Home() {
  return (
    <section className="content-auto px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="space-y-8">
            <Reveal>
              <SectionHeading
                kicker="Inside Enchantea"
                title="A cafe mood built for soft light, sweet cravings, and easy catch-ups."
                description="Every detail leans into warmth and ease so the whole experience feels premium, playful, and inviting from first glance to final sip."
              />
            </Reveal>

            <div className="grid gap-4">
              {rituals.map((ritual, index) => (
                <Reveal
                  key={ritual.title}
                  delay={index * 90}
                  className="glass-panel p-5 sm:p-6"
                >
                  <div className="flex gap-4">
                    <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--cream-deep)] text-xl text-[var(--brown-sugar)]">
                      {ritual.icon}
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-heading text-3xl text-[var(--ink)]">
                        {ritual.title}
                      </h3>
                      <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                        {ritual.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <Link to="/aboutus" className="btn-secondary">
                Meet the brand
                <FiArrowRight />
              </Link>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="soft-card overflow-hidden p-3 sm:row-span-2">
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={imageA}
                    alt="Enchantea tea preparation"
                    className="h-full min-h-[18rem] w-full object-cover transition duration-700 hover:scale-105 sm:min-h-[30rem]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="soft-card overflow-hidden p-3">
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={imageB}
                    alt="Premium milk tea styling"
                    className="h-64 w-full object-cover transition duration-700 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="glass-panel flex flex-col justify-between gap-5 p-6">
                <p className="font-heading text-3xl text-[var(--ink)] sm:text-4xl">
                  The kind of place that makes a plain tea break feel special.
                </p>
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--brown-sugar)]">
                  Cafe direction
                </p>
              </div>

              <div className="soft-card overflow-hidden p-3">
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={imageC}
                    alt="Cozy milk tea corner"
                    className="h-60 w-full object-cover transition duration-700 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="soft-card overflow-hidden p-3">
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={imageD}
                    alt="Enchantea drink composition"
                    className="h-60 w-full object-cover transition duration-700 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
