import Style from "style-it";

export default function Pill(props) {
  const styles = `
    .pill {
      background: ${props.background || 'var(--pill-bg)'};
      color: ${props.color || 'var(--text)'};
      padding: ${props.padding || '0.5rem 0.5rem'};
      border-radius: ${props.borderRadius || '1.5rem'};
      font-size: ${props.fontSize || '0.9rem'};
      display: inline-block;
    }
  `;

  return Style.it(
    styles,
    <span className={`pill ${props.className || ''}`}>
      {props.children || props.text}
    </span>
  );
}
