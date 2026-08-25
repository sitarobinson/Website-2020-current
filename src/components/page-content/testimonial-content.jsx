import React from "react";
import { ProjectCard, SocialBox } from "../export-components";
import { testimonialGroup } from "../../utils/testimonial-utils";

const socialBoxProps = {
  fill: "var(--dark-purple)",
  width: 1.25,
  height: 1.25,
  className: "social-box"
};

const renderTestimonialCard = (testimonial) => (
  <ProjectCard
    title={testimonial.title}
    description={testimonial.description}
    showQuote={true}
    socialbox={<SocialBox {...socialBoxProps} options={testimonial.socialBoxOptions} />}
  />
);

export default function TestimonialContent() {
  return (
    <div className="column">
      {testimonialGroup.map((option, i) => (
        <div className="row" key={i + 300}>
          {option.map((testimonial, j) => testimonial && <React.Fragment key={j}>{renderTestimonialCard(testimonial)}</React.Fragment>)}
        </div>
      ))}
    </div>
  );
}
