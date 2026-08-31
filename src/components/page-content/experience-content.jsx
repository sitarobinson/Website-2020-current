import Style from "style-it";
import { CardSubcontent, ExperienceBox, EducationCard, Stack } from "../export-components";
import { groupByConsecutiveProperty } from "../../utils/array-utils";
import { testimonialsByEmployer } from "../../utils/testimonial-utils";

import {
  educationContent,
  experienceHeader,
  workExperienceContent,
  volunteerExperienceContent,
} from "../../utils/experience-content-utils";

export default function ExperienceContent() {
  const styles = `
    .education-row {
      gap: 1.5rem;
    }
  `;

  return Style.it(
    styles,
    <div>
      <CardSubcontent header="Education" />
      <div className="education-row space-between">
        {educationContent.map((option, i) => (
          <EducationCard
            key={i}
            school={option.school}
            degree={option.degree}
            year={option.year}
            logo={option.logo}
          />
        ))}
      </div>

      <CardSubcontent header={experienceHeader[0]} />
      <Stack spacing="large">
        {groupByConsecutiveProperty(workExperienceContent, "linktext").map((group, groupIndex) => (
          <ExperienceBox
            key={groupIndex}
            roles={group}
            linktext={group[0].linktext}
            link={group[0].link}
            logo={group[0].logo}
            showDuration={true}
            testimonials={testimonialsByEmployer[group[0].linktext]}
          />
        ))}
      </Stack>

      <CardSubcontent header={experienceHeader[1]} />
      <Stack spacing="large">
        {groupByConsecutiveProperty(volunteerExperienceContent, "linktext").map((group, groupIndex) => (
          <ExperienceBox
            key={groupIndex}
            roles={group}
            linktext={group[0].linktext}
            link={group[0].link}
            logo={group[0].logo}
            showDuration={false}
          />
        ))}
      </Stack>
    </div>
  );
}
