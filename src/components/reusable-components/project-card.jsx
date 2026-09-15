import Style from "style-it";
import { WhiteCard } from "../export-components";

export default function ProjectCard(props) {
  const styles = `
    .project-card h2 {
        text-align: center;
        color: var(--text);
    }

    .project-card {
        max-width: 40rem; 
        min-height: 20rem;
        text-align: left;
        padding: 1.6rem;
        position: relative;
    }

    .project-image {
        padding-top: 1rem;
        width: 100%;
        margin-bottom: 1rem;
    }

    .handleOverflow {
        height: ${props.image ? '27rem' : '20rem'};
        overflow: auto;
    }
  `;
  
  return Style.it(
    styles,
    <WhiteCard className="project-card">
      <article>
        <h2>{props.title}</h2>
        <div className="handleOverflow">
          {props.description}
          {props.image && (
            <img
              src={props.image}
              alt={props.title}
              className="project-image"
            />
          )}
        </div>
        {props.socialbox}
      </article>
    </WhiteCard>
  );
}
