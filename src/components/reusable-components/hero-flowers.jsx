import Style from "style-it";

//Gold outlined flowers in the style of the brocade reference, drawn behind the header content.
const PETAL =
  "M0 0 C-30 -20 -40 -70 -18 -100 Q-10 -110 -4 -102 Q2 -114 8 -104 Q14 -110 18 -100 C40 -70 30 -20 0 0 Z";
const VEINS = "M0 -8 Q-12 -50 -10 -88 M0 -10 L0 -98 M0 -8 Q12 -50 10 -88";
const LEAF = "M0 0 C22 -30 22 -70 0 -110 C-22 -70 -22 -30 0 0 Z";

const FLOWERS = [
  { x: 990, y: 190, scale: 1.7, rotate: 15, delay: 0 },
  { x: 120, y: 360, scale: 1.2, rotate: -25, delay: -6 },
  { x: -10, y: 40, scale: 0.7, rotate: 60, delay: -9 },
];

const LEAVES = [
  { x: 260, y: 300, rotate: 110, scale: 1.1 },
];

export default function HeroFlowers() {
  const styles = `
    @keyframes sway {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }

    .hero-flowers {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.9;
      pointer-events: none;
    }

    .hero-flowers path,
    .hero-flowers circle {
      stroke: var(--gold);
      stroke-width: 2;
      stroke-linejoin: round;
      vector-effect: non-scaling-stroke;
    }

    .hero-flowers .petal-dark { fill: rgba(20, 4, 16, 0.7); }
    .hero-flowers .petal-rose { fill: rgba(140, 90, 88, 0.6); }
    .hero-flowers .vein { fill: none; stroke-width: 1; opacity: 0.9; }
    .hero-flowers .leaf { fill: rgba(20, 4, 16, 0.55); }

    .hero-flower {
      transform-box: fill-box;
      transform-origin: center;
      animation: sway 24s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      .hero-flower { animation: none; }
    }
  `;

  return Style.it(
    styles,
    <svg
      className="hero-flowers"
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {LEAVES.map(({ x, y, rotate, scale }) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
          <path className="leaf" d={LEAF} />
          <path className="vein" d="M0 -4 L0 -104" />
        </g>
      ))}
      {FLOWERS.map(({ x, y, scale, rotate, delay }) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
          <g className="hero-flower" style={{ animationDelay: `${delay}s` }}>
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <g key={angle} transform={`rotate(${angle})`}>
                <path className={i % 2 ? "petal-rose" : "petal-dark"} d={PETAL} />
                <path className="vein" d={VEINS} />
              </g>
            ))}
            <circle className="petal-dark" r="14" />
            <circle className="vein" r="8" />
          </g>
        </g>
      ))}
    </svg>
  );
}
