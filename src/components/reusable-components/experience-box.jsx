import Style from "style-it";
import { WhiteCard, Stack, Pill } from "../export-components";
import TestimonialQuote from "./testimonial-quote";

// Calculate total duration across all roles at the company
const calculateTotalDuration = (roles) => {
  if (!roles || roles.length === 0) return null;

  const parseDate = (str) => {
    if (str.toLowerCase() === "present") return new Date();
    // Remove any parenthetical notes like "(1 school year)"
    const cleanStr = str.split('(')[0].trim();
    return new Date(cleanStr);
  };

  // Get the earliest start date and latest end date
  let earliestStart = null;
  let latestEnd = null;

  roles.forEach(role => {
    const parts = role.date.split(" - ");
    if (parts.length >= 2) {
      const startDate = parseDate(parts[0]);
      const endDate = parseDate(parts[1]);

      if (!earliestStart || startDate < earliestStart) {
        earliestStart = startDate;
      }
      if (!latestEnd || endDate > latestEnd) {
        latestEnd = endDate;
      }
    }
  });

  if (!earliestStart || !latestEnd) return null;

  const months = (latestEnd.getFullYear() - earliestStart.getFullYear()) * 12 +
    (latestEnd.getMonth() - earliestStart.getMonth());

  if (months < 12) {
    return `${months} ${months === 1 ? 'mo' : 'mos'}`;
  } else {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'yr' : 'yrs'}`;
    }
    return `${years} ${years === 1 ? 'yr' : 'yrs'} ${remainingMonths} ${remainingMonths === 1 ? 'mo' : 'mos'}`;
  }
};

export default function ExperienceBox(props) {
  const styles = `
    .experience-box {
      display: flex;
      gap: 1.5rem;
      position: relative;
    }

    .experience-icon-container {
      flex-direction: column;
      position: relative;
    }

    .experience-content {
      flex: 1;
      min-width: 0;
    }

    .experience-link {
      color: var(--accent);
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
     
    }

    .experience-link:hover {
      text-decoration: underline;
    }

    .duration-pill {
      margin-top: 0.5rem;
    }

    .experience-date {
      color: var(--muted);
      font-weight: 400;
      font-size: 1rem;
      margin: 0.25rem 0 0.75rem 0;
    }

    .experience-details {
      margin: 0;
      padding-left: 1.25rem;
    }

    .experience-details li {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    .experience-testimonials {
      border-top: 0.0625rem solid var(--light-grey);
      padding-top: 1rem;
    }

    .experience-testimonials-header {
      color: var(--muted);
      font-size: 0.9rem;
      font-weight: bold;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin: 0 0 0.75rem 0;
    }
    `;

  const totalDuration = calculateTotalDuration(props.roles);
  const testimonials = props.testimonials || [];

  return Style.it(
    styles,
    <WhiteCard className="experience-box">
      <div className="experience-icon-container flex-center-no-justify flex-shrink-0">
        <div className="company-logo">
          <img src={props.logo} alt={props.linktext} />

        </div>
        {props.showDuration && totalDuration && (
          <div className="duration-pill">
            <Pill fontSize="0.85rem" padding="0.4rem 0.75rem">{totalDuration}</Pill>
          </div>
        )}
      </div>
      <div className="experience-content">
        <Stack spacing="medium">
          {props.link && <a href={props.link} className="experience-link">{props.linktext}</a>}
          {props.roles.map((role, index) => (
            <div key={index}>
              <h3>{role.title}</h3>
              <p className="experience-date">{role.date}</p>
              <div>{role.description}</div>
            </div>
          ))}
          {/* The recommendations for this employer live with the job they are
              about rather than in a section of their own. */}
          {testimonials.length > 0 && (
            <div className="experience-testimonials">
              <p className="experience-testimonials-header">
                {testimonials.length === 1 ? "Recommendation" : "Recommendations"}
              </p>
              <Stack spacing="large">
                {testimonials.map((testimonial, index) => (
                  <TestimonialQuote
                    key={index}
                    testimonial={testimonial}
                    employer={props.linktext}
                  />
                ))}
              </Stack>
            </div>
          )}
        </Stack>
      </div>
    </WhiteCard>
  );
}
