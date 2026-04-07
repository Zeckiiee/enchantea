import { useEffect, useRef } from "react";

export default function ScrollProgress({ pathname }) {
  const indicatorRef = useRef(null);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;

      const indicatorElement = indicatorRef.current;

      if (!indicatorElement) {
        return;
      }

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollHeight > 0 ? Math.min(window.scrollY / scrollHeight, 1) : 0;

      indicatorElement.style.transform = `scaleX(${progress})`;
    };

    const requestUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [pathname]);

  return (
    <div className="progress-shell" aria-hidden="true">
      <span ref={indicatorRef} className="progress-indicator" />
    </div>
  );
}
