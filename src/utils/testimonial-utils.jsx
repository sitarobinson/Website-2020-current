//This file contains the content used for testimonials.  Rendered in testimonial-content.js

import { groupArrayBySize } from "./array-utils";

export const testimonialContent = [
  {
    title: "Nhi Lam - Vanguard",
    description: (
      <div>
        I have a pleasure of working with Sita when she joined Vanguard as a
        developer on my team. I was particularly impressed by Sita's ability to
        dive in any tasks and juggle between many systems/ technology and
        complete her tasks with quality while demonstrating a thorough attention
        for all the areas involved, no matter how small. As she was learning new
        things, Sita always try to find a way to make the life of the next
        developer on the team become easier. Either by adding more documentation
        or refactor/ clean up ambiguity in the project. When I gave Sita a task,
        I trust that she will always put in enough research and effort to get it
        done with the highest quality. Sita would be an asset to any company or
        team that she joined. I've loved my experience working with Sita, and I
        know that anyone looking to hire or work with her will, too
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/nhi-lam-9755568b/",
        label: "Nhi Lam's LinkedIn"
      },
    ],
  },
  {
    title: "Matt Holtman - ELAP Services",
    description: (
      <div>
        To Whom It May Concern: <br />
        Sita Robinson served ELAP Services as a Data Science Intern from
        September 2018 through March 2019. Done in collaboration with Drexel
        University's Co-op program, the Data Science Internship is part of
        ELAP's ongoing commitment to strengthen our ties with the Philadelphia
        business community and to contribute to the development of talent. Sita
        contributed to our organization's success through her work on several
        key initiatives involving predictive analytics and reference-based
        pricing for healthcare claims. In her first week at ELAP, she wrote a
        script using the Python programming language to automate an important
        data cleaning task and eliminate a major bottleneck in our data load
        process. She went on to write complex database queries in the SQL
        language to feed several predictive models. In particular, her work was
        key to moving forward on a second- generation customer renewal
        prediction model. This work required her to gain a significant level of
        proficiency with database programming and to understand ELAP's business
        processes in order to interpret and manipulate our data effectively.
        Finally, Sita used the R statistical programming language to automate
        the process of building and deploying machine learning models in our
        database environment. This helped us to move forward with the design and
        execution of an entirely new framework for advanced analytics at our
        organization. Sita shared her knowledge with the company by
        participating in biweekly Analytics Council meetings and Machine
        Learning Workshops. She also took the initiative to create and deliver a
        presentation on machine learning from the data scientist's perspective.
        Sita is a very talented student with strong technical skills and an
        admirable eagerness to learn and contribute. She demonstrated
        outstanding communication and leadership characteristics, and we very
        much enjoyed having her on the team. We thank her for her contributions
        to ELAP's success.
      </div>
    ),
    socialBoxOptions: [
      { icon: "linkedin", url: "https://www.linkedin.com/in/mattholtman/", label: "Matt Holtman's LinkedIn" },
    ],
  },
  {
    title: "Steve Tartamella - Comcast",
    description: (
      <div>
        I had the pleasure of having Sita join my Engineering team as a
        software development engineer for a ten week internship at Comcast in
        the summer of 2017. Sita's performance during this ten week period
        exceeded my expectations. Although Sita did not have any experience with
        PHP and Ruby on Rails programming languages, she was able to learn these
        languages in a very short period of time and contribute to our software
        development projects. I was impressed with her ability to work
        independently figuring things out on her own, develop features, fix
        bugs, and integrate with our team practices performing pull requests and
        releasing software with our lead software engineer. Sita is a hard
        worker and team player and I truly enjoyed having her on my team. I look
        forward to Sita having success in the future as a software development
        engineer as she will be a great asset to any company and team. I highly
        recommend Sita Robinson and would certainly hire her upon graduating
        from college.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/steventartamella/",
        label: "Steve Tartamella's profile"
      },
    ],
  },
  {
    title: "Dan Grady - Comcast",
    description: (
      <div>
        To whom it may concern, <br />I had the pleasure of being a mentor to
        Sita Robinson during her internship at Comcast. Sita experienced Comcast
        Software life cycle and Agile development work flow. Together with my
        manager, we supervised Sita, during a ten-week internship. During her
        internship Sita did software development. Our original plan had her
        working on a php application that required some retrofitting to use a
        new data source service. Sita quickly got acclimated, and demonstrated
        an understanding of the project. After a few weeks, the php project was
        canceled for reason not related to Sita, so the plan changed for Sita to
        work on an ongoing Ruby on Rail application. Sita adjusted to the new
        language instantaneously. In a very short time she was turning out work
        ready for our production system. Sita worked hard and was very
        productive. She worked independently when necessary and effectively
        collaborated with other team members when the situation required such. I
        enjoyed mentoring her. She will make a great employee someday. Hopefully
        Comcast will be lucky enough to hire her after she completes her
        education, but if you happen to be looking for a developer or any other
        position that Sita is applying to, you would make a great decision
        choosing her as I would fully endorse the hiring of Sita Robinson.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/dangradyaudubon/",
        label: "Dan Grady's LinkedIn"
      },
    ],
  },
];

//Groups testimonials into arrays of two to make it easier to put two projects on each row.
export const testimonialGroup = groupArrayBySize(testimonialContent, 2);
