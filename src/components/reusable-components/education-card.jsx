import Style from "style-it";
import { WhiteCard } from "../export-components";

export default function EducationCard(props) {
    const styles = `
    .education-card {
      display: flex;
      margin: 1rem 0;
      gap: 1.5rem;
    }

    .education-card.white-card {
      align-self: stretch;
    }

    .school {
      font-weight: bold;
      margin: 0;
    }

    .degree {
      font-size: 1rem;
      margin: 0.3rem 0;
    }

    .year {
      color: var(--muted);
      font-weight: 400;
      font-size: 1rem;
      margin: 0.3rem 0;
    }
  `;

    return Style.it(
        styles,
        <WhiteCard className="education-card flex-center-no-justify">
            <div className="company-logo">
                <img
                    src={props.logo}
                    alt={`${props.school} logo`}
                />
            </div>
            <div className="education-content">
                <h3 className="school">{props.school}</h3>
                <p className="degree">{props.degree}</p>
                <p className="year">{props.year}</p>
            </div>
        </WhiteCard>
    );
}
