import PropTypes from "prop-types";

const TECHNOLOGIES = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Tailwind CSS",
  "Angular",
  "Ionic",
  "Scrum",
  "Node.js",
  "SQL",
  "Android Studio",
  "Github",
  "Python",
  "Django",
  "Jira",
  "React",
  "Next.js",
];

const SOFT_SKILLS = [
  "Effective communication",
  "Teamwork",
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Positive attitude",
  "Empathy",
  "Critical Thinking",
];

const SkillTag = ({ skill, bgClass }) => (
  <span
    className={`px-4 py-2 ${bgClass} rounded-full text-sm md:text-base hover:bg-bunker-600 transition-colors duration-300`}
  >
    {skill}
  </span>
);

SkillTag.propTypes = {
  skill: PropTypes.string.isRequired,
  bgClass: PropTypes.string.isRequired,
};

const SkillSection = ({ title, skills, bgClass }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-bunker-950 p-6 bg-bunker-100 rounded-2xl mt-8 first:mt-0">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold col-span-full mb-6">
      {title}
    </h1>
    <div className="col-span-full flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} bgClass={bgClass} />
      ))}
    </div>
  </div>
);

SkillSection.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  bgClass: PropTypes.string.isRequired,
};

const Skills = () => {
  return (
    <section id="Skills" className="relative bg-bunker-700 pt-24 pb-16">
      {/* Page Divider */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{ transform: "translateY(-1px)" }}
      >
        <div style={{ overflow: "hidden" }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "#f0fafb",
              width: "125%",
              height: "75px",
              transform: "scaleX(-1)",
            }}
          >
            <path d="M1200 120L0 16.48V0h1200v120z" />
          </svg>
        </div>
      </div>

      {/* Main container */}
      <div className="mx-auto max-w-4xl px-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-bunker-50 italic mb-16">
          Skills
        </h1>

        <SkillSection
          title="Technologies"
          skills={TECHNOLOGIES}
          bgClass="bg-bunker-500 text-bunker-50"
        />

        <SkillSection
          title="Soft Skills"
          skills={SOFT_SKILLS}
          bgClass="bg-bunker-400 text-bunker-950"
        />
      </div>
    </section>
  );
};

export default Skills;
