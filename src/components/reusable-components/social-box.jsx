import Style from "style-it";
import { Icon } from "../export-components";

export default function SocialBox(props) {
  const styles = `
    .social-box-container {
      gap: 1.5rem;
      margin-top: 0.8rem;
    }

    .social-box-container a {
      display: inline-block;
      transition: transform 0.2s ease;
    }

    .social-box-container a:hover {
      transform: scale(1.1);
    }
  `;

  return Style.it(
    styles,
    <div className="social-box-container flex-center">
      {props.options.map((option, i) => (
        <a 
          href={option.url} 
          target="blank_" 
          key={i}
          aria-label={option.label}
          rel="noopener noreferrer"
        >
          <Icon
            name={option.icon}
            fill={props.fill}
            width={props.width || 3.125}
            height={props.height || 3.125}
          />
        </a>
      ))}
    </div>
  );
}
