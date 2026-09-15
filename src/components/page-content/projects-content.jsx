import { ProjectCard, SocialBox } from "../export-components";
import { projectGroup } from "../../utils/projects-content-utils";

const socialBoxProps = {
  fill: "var(--heading)",
  width: 1.25,
  height: 1.25,
  className: "social-box"
};

const renderProjectCard = (project) => (
  <ProjectCard
    title={project.title}
    description={project.description}
    image={project.image}
    socialbox={<SocialBox {...socialBoxProps} options={project.socialBoxOptions} />}
  />
);

export default function ProjectsContent() {
  return (
    <div className="column">
      {projectGroup.map((option, i) => (
        <div className="row" key={i + 200}>
          {option.map((project, j) => project && <div key={j}>{renderProjectCard(project)}</div>)}
        </div>
      ))}
    </div>
  );
}
