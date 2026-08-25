//react-hooks/refs assumes a prop named *Ref is being read during render, but
//buttonRef is only forwarded to the button's ref attribute and its .current is
//never accessed here.
/* eslint-disable react-hooks/refs */
import Style from "style-it";

export default function CircularButton(props) {
  const styles = `
    .circular-button {
      background: ${props.background || 'rgba(255, 255, 255, 0.9)'};
      border: none;
      width: ${props.size || 3}rem;
      height: ${props.size || 3}rem;
      border-radius: 50%;
      cursor: pointer;
      font-size: ${props.fontSize || 1.5}rem;
      color: ${props.color || 'var(--brown)'};
      transition: background 0.3s ease, transform 0.2s ease, opacity 0.3s ease;
      z-index: ${props.zIndex || 10000};
      box-shadow: ${props.boxShadow || '0 0.125rem 0.5rem rgba(0, 0, 0, 0.2)'};
    }

    .circular-button:hover:not(:disabled) {
      background: ${props.hoverBackground || 'var(--white)'};
      transform: scale(1.1);
    }

    .circular-button:active:not(:disabled) {
      transform: scale(0.95);
    }

    .circular-button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .circular-button:focus {
      outline: 2px solid var(--light-purple);
      outline-offset: 2px;
    }
  `;

  return Style.it(
    styles,
    <button
      ref={props.buttonRef}
      className={`circular-button flex-center flex-shrink-0 ${props.className || ''}`}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
      style={props.style}
    >
      {props.children}
    </button>
  );
}
