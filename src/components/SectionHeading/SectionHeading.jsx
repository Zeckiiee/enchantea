export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className = "",
}) {
  const isCentered = align === "center";

  return (
    <div
      className={`flex flex-col gap-4 ${
        isCentered ? "mx-auto max-w-3xl items-center text-center" : ""
      } ${className}`}
    >
      {kicker ? <span className="eyebrow">{kicker}</span> : null}
      <div className="space-y-4">
        <h2 className="display-title text-4xl text-[var(--ink)] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description ? (
          <p
            className={`max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg ${
              isCentered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
