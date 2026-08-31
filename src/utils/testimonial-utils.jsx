//This file contains the content used for testimonials.

const testimonialContent = [
  {
    name: "Omar Cespedes",
    relationship: "Teammate",
    company: "BairesDev (subcontractor for Booz Allen)",
    linktext: "Booz Allen Hamilton",
    description: (
      <div>
        I had the pleasure of working with her and can confidently say she is a
        highly detail-oriented professional who consistently strives for
        excellence. She never settles for a mediocre solution and always pushes
        to deliver high-quality results. Beyond her technical abilities, she is
        a supportive and reliable teammate. I strongly recommend her to any team
        looking for someone committed, thorough, and collaborative.
      </div>
    ),
     socialBoxOptions: [      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/omar-cespedes",
        label: "Omar Cespedes' LinkedIn",
      },]
  },
  {
    name: "Nhi Lam",
    relationship: "Senior Developer (Developer Chapter Lead)",
    linktext: "Vanguard",
    description: (
      <div>
        I was particularly impressed by Sita's ability to dive into tasks,
        juggle between many systems and technologies, and complete her work with
        quality while demonstrating thorough attention to detail. As she was
        learning new things, Sita always tried to make life easier for the next
        developer, whether by adding documentation or refactoring and cleaning
        up ambiguity in the project. When I gave Sita a task, I trusted that she
        would put in the research and effort to get it done with the highest
        quality. Sita would be an asset to any company or team that she joined.
        I've loved my experience working with Sita, and I know that anyone
        looking to hire or work with her will, too.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/nhi-lam-9755568b/",
        label: "Nhi Lam's LinkedIn",
      },
    ],
  },
  {
    name: "Matt Holtman",
    relationship: "Manager",
    linktext: "ELAP Services (now Imagine360)",
    description: (
      <div>
        In her first week at ELAP, she wrote a script using the Python
        programming language to automate an important data cleaning task and
        eliminate a major bottleneck in our data load process. She went on to
        write complex database queries in the SQL language to feed several
        predictive models. Sita shared her knowledge with the company by
        participating in biweekly Analytics Council meetings and Machine
        Learning Workshops. She also took the initiative to create and deliver a
        presentation on machine learning from the data scientist's perspective.
        She demonstrated outstanding communication and leadership
        characteristics, and we very much enjoyed having her on the team.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/mattholtman/",
        label: "Matt Holtman's LinkedIn",
      },
    ],
  },
  {
    name: "Steve Tartamella",
    relationship: "Manager",
    linktext: "Comcast",
    description: (
      <div>
        Sita's performance during this ten week period exceeded my expectations.
        Although Sita did not have any experience with PHP and Ruby on Rails
        programming languages, she was able to learn these languages in a very
        short period of time and contribute to our software development
        projects. I was impressed with her ability to work independently
        figuring things out on her own, develop features, fix bugs, and
        integrate with our team practices. She will be a great asset to any
        company and team.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/steventartamella/",
        label: "Steve Tartamella's profile",
      },
    ],
  },
  {
    name: "Dan Grady",
    relationship: "Senior Developer",
    linktext: "Comcast",
    description: (
      <div>
Sita quickly got acclimated, and demonstrated an understanding of the project. In a very short time she was turning out work ready for our production system. Sita worked hard and was very productive. She worked independently when necessary and effectively collaborated with other team members when the situation required such. I enjoyed mentoring her. If you happen to be looking for a developer or any other position that Sita is applying to, you would make a great decision choosing her as I would fully endorse the hiring of Sita Robinson.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/dangradyaudubon/",
        label: "Dan Grady's LinkedIn",
      },
    ],
  },
];

//Keyed by the employer's `linktext` so experience-content can look up the
//quotes for a job without walking the whole list for every box.
export const testimonialsByEmployer = testimonialContent.reduce((acc, testimonial) => {
  (acc[testimonial.linktext] = acc[testimonial.linktext] || []).push(testimonial);
  return acc;
}, {});
