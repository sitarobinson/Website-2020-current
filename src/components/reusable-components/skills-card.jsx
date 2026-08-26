import Style from "style-it";
import { WhiteCard, Pill } from "../export-components";

const pillsFor = (skills) =>
  skills.split(",").map((skill, index) => <Pill key={index}>{skill.trim()}</Pill>);

export default function SkillsCard({ category, skills, groups }) {
  const styles = `
    .skills-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skills-groups {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.1rem 1.5rem;
    }

    .skills-group h4 {
      margin: 0 0 0.5rem;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--dark-grey);
    }
  `;

  return Style.it(
    styles,
    <WhiteCard>
      <h3>{category}</h3>
      <br />
      {groups ? (
        <div className="skills-groups">
          {groups.map((group, index) => (
            <div className="skills-group" key={index}>
              <h4>{group.label}</h4>
              <div className="skills-pills">{pillsFor(group.skills)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="skills-pills">{pillsFor(skills)}</div>
      )}
    </WhiteCard>
  );
}
