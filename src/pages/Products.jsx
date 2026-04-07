import { useState } from "react";
import { FiCheckCircle, FiSearch } from "react-icons/fi";
import ProductCard from "../components/ProductCard/ProductCard";
import Reveal from "../components/Reveal/Reveal";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import { menuCategories, menuItems } from "../data/menu";

const customNotes = [
  {
    title: "Sweetness your way",
    description:
      "Keep the finish mellow or lean into a richer dessert-like cup depending on the mood.",
  },
  {
    title: "Texture upgrades",
    description:
      "Warm pearls, jelly, or cream foam can shift a familiar tea into something more memorable.",
  },
  {
    title: "Made to feel polished",
    description:
      "Clean presentation, layered color, and just enough contrast to keep the page and the products feeling premium.",
  },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.categories.includes(selectedCategory);
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-10">
      <div className="ambient-orb absolute left-[-5rem] top-32 h-44 w-44 bg-[rgba(255,220,204,0.76)]" />
      <div className="ambient-orb absolute right-[-4rem] top-72 h-52 w-52 bg-[rgba(171,191,149,0.28)]" />

      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <div className="glass-panel relative overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="ambient-orb absolute -left-16 top-0 h-32 w-32 bg-[rgba(255,220,204,0.76)]" />
            <div className="ambient-orb absolute bottom-0 right-0 h-44 w-44 bg-[rgba(214,165,116,0.24)]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div className="space-y-8">
                <SectionHeading
                  kicker="The Menu"
                  title="Choose the cup that matches your mood."
                  description="From richer brown sugar signatures to brighter refreshers, the menu now feels cleaner, warmer, and easier to browse at a glance."
                />

                <div className="relative max-w-xl">
                  <FiSearch className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[var(--muted)]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search flavors, textures, or moods..."
                    className="w-full rounded-full border border-white/80 bg-white/86 py-4 pl-14 pr-5 text-sm text-[var(--ink)] outline-none transition duration-300 placeholder:text-[var(--muted)] focus:border-[rgba(141,92,59,0.28)] focus:bg-white focus:shadow-[0_18px_36px_rgba(93,58,31,0.08)]"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  {menuCategories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition duration-300 ${
                        selectedCategory === category.id
                          ? "bg-[var(--brown-sugar)] text-white shadow-[0_16px_30px_rgba(93,58,31,0.16)]"
                          : "border border-white/70 bg-white/78 text-[var(--ink)] hover:-translate-y-1 hover:bg-white"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="soft-card overflow-hidden p-3 sm:translate-y-6">
                  <div className="overflow-hidden rounded-[24px]">
                    <img
                      src={menuItems[0].image}
                      alt={menuItems[0].name}
                      className="h-64 w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="soft-card overflow-hidden p-3">
                  <div className="overflow-hidden rounded-[24px]">
                    <img
                      src={menuItems[1].image}
                      alt={menuItems[1].name}
                      className="h-64 w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="glass-panel p-6 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brown-sugar)]">
                    Showing {filteredProducts.length} blends
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                    Interactive cards, cleaner filtering, and image-first layout
                    make the full collection feel easier to explore on both
                    mobile and desktop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <section className="content-auto space-y-8">
          <Reveal>
            <SectionHeading
              kicker="Menu Grid"
              title="A softer, more premium product browse."
              description="Hover states, zoom treatment, and a warmer card system give every item a more portfolio-ready presentation."
            />
          </Reveal>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((item, index) => (
                <ProductCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="glass-panel p-8 text-center">
                <p className="font-heading text-4xl text-[var(--ink)]">
                  No blend matched that search.
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  Try a broader flavor word like creamy, matcha, caramel, or
                  fresh.
                </p>
              </div>
            </Reveal>
          )}
        </section>

        <section className="content-auto space-y-8">
          <Reveal>
            <SectionHeading
              kicker="Customize the Mood"
              title="Small touches that make the menu feel more personal."
              description="The page now supports a more premium browsing flow by showing how each drink can flex around taste, texture, and presentation."
              align="center"
            />
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {customNotes.map((note, index) => (
              <Reveal
                key={note.title}
                delay={index * 90}
                className="glass-panel p-6"
              >
                <div className="flex gap-4">
                  <span className="mt-1 text-xl text-[var(--brown-sugar)]">
                    <FiCheckCircle />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-heading text-3xl text-[var(--ink)]">
                      {note.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {note.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
