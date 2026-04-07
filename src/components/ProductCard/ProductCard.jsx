import { FiArrowUpRight, FiStar } from "react-icons/fi";
import Reveal from "../Reveal/Reveal";

export default function ProductCard({ item, index = 0 }) {
  return (
    <Reveal delay={index * 90} className="h-full">
      <article className="soft-card group flex h-full flex-col overflow-hidden p-3">
        <div className="relative overflow-hidden rounded-[24px]">
          <div
            className="absolute inset-0 z-10 opacity-60 transition duration-500 group-hover:opacity-75"
            style={{ background: item.overlay }}
          />
          <img
            src={item.image}
            alt={item.name}
            className="h-72 w-full object-cover object-center transition duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />

          <div className="absolute inset-x-4 top-4 z-20 flex items-center justify-between gap-3">
            <span className="rounded-full bg-white/85 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--ink)] shadow-[0_10px_24px_rgba(86,56,32,0.14)]">
              {item.badge}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fff8f1]/90 px-3 py-2 text-sm font-semibold text-[var(--ink)] shadow-[0_10px_24px_rgba(86,56,32,0.12)]">
              <FiStar className="text-[var(--caramel-strong)]" />
              {item.rating}
            </span>
          </div>

          <div className="absolute inset-x-4 bottom-4 z-20">
            <span className="inline-flex rounded-full bg-white/88 px-3 py-2 text-sm font-medium text-[var(--ink)]">
              {item.note}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-5 px-3 pb-3 pt-6">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--cream-deep)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brown-sugar)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-heading text-3xl leading-none text-[var(--ink)] transition duration-300 group-hover:text-[var(--brown-sugar)]">
              {item.name}
            </h3>
            <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
              {item.description}
            </p>
          </div>

          <div className="mt-auto flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                Starts at
              </p>
              <p className="mt-2 text-3xl font-semibold text-[var(--brown-sugar)]">
                {item.price}
              </p>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--espresso)] px-4 py-3 text-sm font-semibold text-white transition duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--brown-sugar)]">
              See details
              <FiArrowUpRight />
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
