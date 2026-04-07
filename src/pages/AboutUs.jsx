import { Link } from "react-router-dom";
import { FiArrowRight, FiCoffee, FiHeart, FiUsers } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import aboutUsPicture from "../assets/pictures/aboutUsPicture.jpg";
import aboutUsPic1 from "../assets/pictures/aboutUsPic1.jpg";
import aboutUsPic2 from "../assets/pictures/aboutUsPic2.jpg";
import bgAboutus from "../assets/pictures/bgAboutus.png";
import Reveal from "../components/Reveal/Reveal";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const values = [
  {
    icon: <LuLeaf />,
    title: "Ingredient-first choices",
    description:
      "We lean into cleaner tea profiles and balanced sweetness so the drinks stay expressive without feeling heavy.",
  },
  {
    icon: <FiHeart />,
    title: "Warm, memorable service",
    description:
      "The brand voice and visuals are built to feel welcoming, polished, and easy to connect with.",
  },
  {
    icon: <FiCoffee />,
    title: "Craft with personality",
    description:
      "Every cup should look intentional, taste layered, and leave enough personality to stand out from the usual milk tea page.",
  },
  {
    icon: <FiUsers />,
    title: "Designed for shared moments",
    description:
      "Enchantea is imagined as the kind of spot people return to for catch-ups, comfort, and repeat favorites.",
  },
];

const storySteps = [
  {
    title: "Start with comfort",
    description:
      "The idea began with a simple goal: make milk tea feel as comforting as a favorite seat by the window.",
  },
  {
    title: "Refine the details",
    description:
      "From palette to product styling, the brand was shaped around richer textures, softer tones, and more premium presentation.",
  },
  {
    title: "Keep it inviting",
    description:
      "Even with a polished look, the heart of the experience stays playful, approachable, and easy to enjoy.",
  },
];

export default function AboutUs() {
  return (
    <div className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-10">
      <div
        className="absolute inset-x-0 top-0 h-[36rem] opacity-18"
        style={{
          backgroundImage: `url(${bgAboutus})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="ambient-orb absolute left-[-6rem] top-28 h-44 w-44 bg-[rgba(255,220,204,0.72)]" />
      <div className="ambient-orb absolute right-[-5rem] top-80 h-52 w-52 bg-[rgba(171,191,149,0.28)]" />

      <div className="relative mx-auto max-w-7xl space-y-16">
        <section className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal className="space-y-8">
            <SectionHeading
              kicker="About Enchantea"
              title="We design every cup to feel like a comforting pause in the day."
              description="Enchantea is imagined as a cozy, premium milk tea brand where soft visuals, layered flavors, and thoughtful pacing all work together."
            />

            <div className="space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
              <p>
                The story starts with a love for milk tea that feels elevated
                without becoming stiff. We wanted the page to feel warm and
                playful, but still clean enough to look proudly portfolio-ready.
              </p>
              <p>
                That means richer browns, creamy neutrals, gentler motion, and
                drink cards that feel more like a curated collection than a
                basic product grid.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass-panel p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brown-sugar)]">
                  Warm palette
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Cream, caramel, and matcha tones shape the mood.
                </p>
              </div>
              <div className="glass-panel p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brown-sugar)]">
                  Smooth motion
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Reveal-on-scroll and hover details stay elegant and soft.
                </p>
              </div>
              <div className="glass-panel p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brown-sugar)]">
                  Clear hierarchy
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Better spacing and stronger typography make the story land.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="soft-card overflow-hidden p-3 sm:row-span-2">
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={aboutUsPicture}
                    alt="Enchantea cafe story"
                    className="h-full min-h-[18rem] w-full object-cover transition duration-700 hover:scale-105 sm:min-h-[30rem]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="soft-card overflow-hidden p-3">
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={aboutUsPic1}
                    alt="Milk tea preparation"
                    className="h-64 w-full object-cover transition duration-700 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="soft-card overflow-hidden p-3">
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={aboutUsPic2}
                    alt="Cafe detail close-up"
                    className="h-64 w-full object-cover transition duration-700 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="content-auto space-y-8">
          <Reveal>
            <SectionHeading
              kicker="Core Values"
              title="Premium does not have to feel cold."
              description="The revamp keeps the tone polished while still making the brand feel warm, social, and easy to come back to."
              align="center"
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 90}
                className="glass-panel h-full p-6"
              >
                <div className="space-y-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--cream-deep)] text-2xl text-[var(--brown-sugar)]">
                    {value.icon}
                  </span>
                  <div className="space-y-3">
                    <h3 className="font-heading text-3xl text-[var(--ink)]">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="content-auto grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <SectionHeading
              kicker="Brand Story"
              title="A simple concept, refined with stronger visual direction."
              description="The updated About page now explains not just who Enchantea is, but how the whole experience is meant to feel."
            />
          </Reveal>

          <div className="grid gap-4">
            {storySteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 100}
                className="glass-panel p-6"
              >
                <div className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--espresso)] text-sm font-bold uppercase tracking-[0.16em] text-white">
                    0{index + 1}
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-heading text-3xl text-[var(--ink)]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="content-auto">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[34px] px-8 py-10 text-white shadow-[0_26px_70px_rgba(93,58,31,0.2)] sm:px-10 lg:px-14"
              style={{
                background:
                  "linear-gradient(135deg, rgba(79, 51, 33, 0.98), rgba(141, 92, 59, 0.96), rgba(215, 165, 116, 0.92))",
              }}
            >
              <div className="ambient-orb absolute left-0 top-0 h-44 w-44 bg-[rgba(255,255,255,0.18)]" />
              <div className="ambient-orb absolute bottom-0 right-0 h-56 w-56 bg-[rgba(255,255,255,0.14)]" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl space-y-4">
                  <span className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.34em] text-white/86">
                    Cozy by design
                  </span>
                  <h2 className="font-heading text-5xl leading-none text-white sm:text-6xl">
                    The goal is simple: make every page feel as inviting as the
                    drinks themselves.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                    Better storytelling, stronger hierarchy, and warmer
                    interactions now give the brand a fuller personality from
                    hero section to footer.
                  </p>
                </div>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[var(--espresso)] transition duration-300 hover:-translate-y-1 hover:bg-[#fff1e1]"
                >
                  Explore our blends
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
