import { useState } from "react";
import cx from "classnames";

const classes = {
  cs: [
    "Data Structures",
    "Algorithms",
    "Systems Programming",
    "Artificial Intelligence",
    "Software Engineering",
    "Statistics and Data Science",
  ],
  econ: [
    "Advance Competition",
    "Market Inefficiencies",
    "Central Banking",
    "Game Theory",
    "Financial Markets",
    "Econometrics",
  ],
  activities: ["Yale Computer Society", "Yale Entrepreneurial Society"],
};

const skills = {
  languages: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "SQL",
    "C",
    "Ruby on Rails",
  ],
  tools: ["Git", "Bash", "Tensorflow", "Docker"],
  frameworks: [
    "React",
    "Node.js",
    "Flask",
    "FastAPI",
    "Express",
    "Postgres",
    "MongoDB",
  ],
};

export function CoursePicker() {
  const categories = ["cs", "econ", "activities"];
  const [selected, setSelected] = useState({
    cs: false,
    econ: false,
    activities: false,
  });
  const { cs, econ, activities } = classes;

  return (
    <div className="border rounded-xl p-2 px-4 my-4">
      <div className="flex">
        <div className="font-bold mr-auto">Courses</div>
        <div className="flex gap-2">
          {categories.map((c) => (
            <button
              className={cx(
                "rounded px-3 text-gray-500",
                selected[c] && " bg-green-200 text-black"
              )}
              onClick={() => setSelected({ ...selected, [c]: !selected[c] })}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      {selected.cs && (
        <div className="mt-3">
          <div className="text-gray-400 uppercase text-sm">CS</div>
          {cs.join(", ")}
        </div>
      )}
      {selected.econ && (
        <div className="mt-3">
          <div className="text-gray-400 uppercase text-sm">econ</div>
          {econ.join(", ")}
        </div>
      )}
      {selected.activities && (
        <div className="mt-3">
          <div className="text-gray-400 uppercase text-sm">activities</div>
          {activities.join(", ")}
        </div>
      )}
    </div>
  );
}

export function SkillsPicker() {
  const categories = ["languages", "frameworks", "tools"];
  const [selected, setSelected] = useState({
    languages: false,
    frameworks: false,
    tools: false,
  });
  const { languages, frameworks, tools } = skills;

  return (
    <div className="border rounded-xl p-2 px-4 my-4">
      <div className="flex">
        <div className="font-bold mr-auto">Skills</div>
        <div className="flex gap-2">
          {categories.map((c) => (
            <button
              className={cx(
                "rounded px-3 text-gray-500",
                selected[c] && " bg-green-200 text-black"
              )}
              onClick={() => setSelected({ ...selected, [c]: !selected[c] })}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      {selected.languages && (
        <div className="mt-3">
          <div className="text-gray-400 uppercase text-sm">languages</div>
          {languages.join(", ")}
        </div>
      )}
      {selected.frameworks && (
        <div className="mt-3">
          <div className="text-gray-400 uppercase text-sm">frameworks</div>
          {frameworks.join(", ")}
        </div>
      )}
      {selected.tools && (
        <div className="mt-3">
          <div className="text-gray-400 uppercase text-sm">tools</div>
          {tools.join(", ")}
        </div>
      )}
    </div>
  );
}
