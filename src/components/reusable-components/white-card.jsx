import Style from "style-it";

export default function WhiteCard({ children, className = "" }) {
    const styles = `
    .white-card {
      background: var(--surface);
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
      flex: 1;
      min-width: 0;
    }
  `;

    return Style.it(
        styles,
        <div className={`white-card ${className}`}>
            {children}
        </div>
    );
}
