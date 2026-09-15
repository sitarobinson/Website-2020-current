import Style from "style-it";
import { CircularButton, Icon } from "../export-components";
import { useTheme, setTheme } from "../../utils/theme";

export default function ThemeToggle() {
  const theme = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  const styles = `
    .theme-toggle {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  `;

  return Style.it(
    styles,
    <div className="theme-toggle">
      <CircularButton
        onClick={() => setTheme(next)}
        size={2.75}
        background="rgba(255, 255, 255, 0.15)"
        hoverBackground="rgba(255, 255, 255, 0.3)"
        boxShadow="none"
        zIndex={1}
        ariaLabel={`Switch to ${next} theme`}
      >
        <Icon
          name={theme === "dark" ? "sun" : "moon"}
          fill="var(--white)"
          width={1.5}
          height={1.5}
        />
      </CircularButton>
    </div>
  );
}
