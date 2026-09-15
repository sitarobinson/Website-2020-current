import Style from "style-it";
import { Icon, SocialBox } from "../export-components";

const socialBoxProps = {
  fill: "var(--heading)",
  width: 1.25,
  height: 1.25,
};


export default function TestimonialQuote({ testimonial, employer }) {
  const context = [
    testimonial.relationship,
    testimonial.company === employer ? null : testimonial.company,
  ]
    .filter(Boolean)
    .join(" from ");

  const styles = `
    .testimonial-quote {
      margin: 0 0 0 0.75rem;
      border-left: 0.1875rem solid var(--accent);
      padding-left: 0.75rem;
    }

    .testimonial-quote blockquote {
      margin: 0;
    }

    .testimonial-quote-body {
      display: flex;
      gap: 0.5rem;
      align-items: flex-start;
    }

    .testimonial-quote-body p,
    .testimonial-quote-body div {
      font-size: 1rem;
      font-style: italic;
    }

    .testimonial-quote-icon {
      flex-shrink: 0;
      margin-top: 0.25rem;
    }

    .testimonial-attribution {
      margin-top: 0.5rem;
      padding-left: 1.75rem;
    }

    .testimonial-attribution-name {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      flex-wrap: wrap;
    }

    .testimonial-attribution cite {
      color: var(--text);
      font-style: normal;
      font-weight: bold;
      font-size: 1rem;
    }

    .testimonial-attribution .testimonial-relationship {
      display: block;
      color: var(--muted);
      font-size: 0.9rem;
      margin-top: 0.15rem;
    }

    .testimonial-divider {
      width: 0.0625rem;
      align-self: stretch;
      margin: 0.1rem 0;
      background: var(--muted);
    }

    .testimonial-attribution .social-box-container {
      margin-top: 0;
      justify-content: flex-start;
      gap: 0.75rem;
    }
  `;

  return Style.it(
    styles,
    <figure className="testimonial-quote">
      <div className="testimonial-quote-body">
        <span className="testimonial-quote-icon">
          <Icon
            name="quote"
            fill="var(--heading)"
            width="1.25"
            height="1.25"
            opacity="0.3"
            aria-hidden="true"
          />
        </span>
        <blockquote>{testimonial.description}</blockquote>
      </div>
      <figcaption className="testimonial-attribution">
        <div className="testimonial-attribution-name">

          <cite>
            <span aria-hidden="true">- </span>
            {testimonial.name}
          </cite>
          {testimonial.socialBoxOptions.length > 0 && (
            <>
              <span className="testimonial-divider" aria-hidden="true" />
              <SocialBox {...socialBoxProps} options={testimonial.socialBoxOptions} />
            </>
          )}
        </div>
        {context && <span className="testimonial-relationship">{context}</span>}
      </figcaption>
    </figure>
  );
}
