import { useState } from "react";
import Style from "style-it";
import { Icon, CircularButton } from "../export-components";

export default function ScrollUpButton(props) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const styles = `
    .scrollup-button {
      position: fixed;
      bottom: 1.75rem;
      right: 2.75rem;
      display: flex;
    }

    .scrollup-button.scrollup-button-hidden {
      display: none;
    }
  `;

  window.addEventListener("scroll", toggleVisible);
  
  return Style.it(
    styles,
    <CircularButton
      onClick={scrollToTop}
      size={4.75}
      background="var(--gradient)"
      hoverBackground="var(--gradient)"
      color="var(--white)"
      boxShadow="0.125rem 0.125rem 0.1875rem rgba(0, 0, 0, 0.27)"
      zIndex={1000}
      ariaLabel="Scroll to top"
      className={`scrollup-button ${!visible ? 'scrollup-button-hidden' : ''}`}
    >
      <Icon
        name="arrow-up"
        fill="var(--white)"
        width={props.width || 1.875}
        height={props.height || 1.875}
      />
    </CircularButton>
  );
}
