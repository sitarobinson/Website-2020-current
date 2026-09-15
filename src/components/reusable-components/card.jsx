import Style from "style-it";

export default function Card(props) {
  const styles = `
    .content-text {
      background-color: var(--panel);
      height: 100%;
      min-height: 26rem;
      width: 85vw;
      padding: 3rem;
    }
  `;
  
  return Style.it(
    styles,
    <div className="column flex-center">
      <div className="content-text">{props.children}</div>
    </div>
  );
}
