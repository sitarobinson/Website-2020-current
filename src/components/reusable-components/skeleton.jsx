import Style from "style-it";

//A single shimmering placeholder bar.  The tone sits between --surface and --panel so
//it stays visible both inside a white card and on the grey content panel.
export function Skeleton({ height = "1rem", width = "100%", radius = "0.5rem", aspect }) {
  const styles = `
    .skeleton {
      background-color: var(--skeleton);
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        var(--skeleton-shine) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 200% 100%;
      background-repeat: no-repeat;
      animation: skeleton-shimmer 1.4s ease-in-out infinite;
      flex-shrink: 0;
    }

    @keyframes skeleton-shimmer {
      0% { background-position: -150% 0; }
      100% { background-position: 150% 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .skeleton { animation: none; }
    }
  `;

  return Style.it(
    styles,
    <div
      className="skeleton"
      style={
        aspect
          ? { width, aspectRatio: aspect, borderRadius: radius }
          : { height, width, borderRadius: radius }
      }
      aria-hidden="true"
    />
  );
}

const LINE_WIDTHS = ["100%", "96%", "88%", "99%", "82%", "94%", "90%", "70%"];

//Placeholder shaped like the cards the tabs actually render.  Projects and
//Testimonials use ProjectCard (max-width 40rem, min-height 20rem, 1.6rem padding),
//so the placeholder matches those dimensions to hold the layout steady.
export function SkeletonCard({ lines = 8, media = false }) {
  const styles = `
    .skeleton-card {
      background: var(--surface);
      border-radius: 1rem;
      box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
      flex: 1;
      min-width: 0;
      max-width: 40rem;
      min-height: 20rem;
      padding: 1.6rem;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .skeleton-title {
      display: flex;
      justify-content: center;
      margin-bottom: 0.5rem;
    }
  `;

  return Style.it(
    styles,
    <div className="skeleton-card">
      <div className="skeleton-title">
        <Skeleton height="1.75rem" width="55%" radius="0.4rem" />
      </div>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="0.95rem"
          width={LINE_WIDTHS[i % LINE_WIDTHS.length]}
          radius="0.4rem"
        />
      ))}
      {media && <Skeleton height="9rem" width="100%" radius="0.5rem" />}
    </div>
  );
}

//Suspense fallback for the Photos tab.  That grid is square thumbnails three to a
//row, not text cards, so it needs its own shape.  Mirrors photo-card's sizing.
export function PhotoGridSkeleton({ rows = 3 }) {
  const styles = `
    .skeleton-photo {
      flex: 1;
      min-width: 0;
      max-width: 26.17rem;
    }
  `;

  return Style.it(
    styles,
    <div className="column" role="status" aria-label="Loading photos">
      {Array.from({ length: rows }).map((_, r) => (
        <div className="row" key={r}>
          {Array.from({ length: 3 }).map((_, c) => (
            <div className="skeleton-photo" key={c}>
              <Skeleton aspect="1" radius="1rem" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

//Suspense fallback for a tab: two rows of full sized cards, mirroring how the
//content tabs lay out so the page keeps its shape while the chunk downloads.
export default function ContentSkeleton() {
  return (
    <div className="column" role="status" aria-label="Loading content">
      <div className="row">
        <SkeletonCard lines={6} media />
        <SkeletonCard lines={8} />
      </div>
      <div className="row">
        <SkeletonCard lines={8} />
        <SkeletonCard lines={6} media />
      </div>
    </div>
  );
}
