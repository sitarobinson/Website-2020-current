import Style from "style-it";
import { WhiteCard, Pill } from "../export-components";

export default function SkillsCard({ category, skills }) {
  const skillArray = skills.split(", ");

  const styles = `
    .skills-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  `;

  return Style.it(
    styles,
    <WhiteCard>
      <h3>{category}</h3>
      <br/>
      <div className="skills-pills">
        {skillArray.map((skill, index) => (
          <Pill key={index}>
            {skill.trim()}
          </Pill>
        ))}
      </div>
    </WhiteCard>
  );
}
