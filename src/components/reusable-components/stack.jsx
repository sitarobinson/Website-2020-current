import Style from "style-it";

const SPACING_MAP = {
  small: "0.5rem",
  medium: "1rem",
  large: "1.5rem"
};

export default function Stack(props) {
  const spacing = SPACING_MAP[props.spacing] || SPACING_MAP.medium;

  const styles = `
    .stack {
      display: flex;
      flex-direction: column;
      gap: ${spacing};
    }
  `;

  return Style.it(
    styles,
    <div className={`stack ${props.className || ''}`}>
      {props.children}
    </div>
  );
}
