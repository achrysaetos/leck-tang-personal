import utilStyles from "../styles/utils.module.css";
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

function CoursePicker() {
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

function SkillsPicker() {
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

export default function Resume() {
  return (
    <>
      <h2 className={utilStyles.headingLg}>Education</h2>
      <div className="flex justify-between">
        <div>
          <p className="text-blue-400 font-bold text-lg">Yale University</p>
          <p className="text-gray-400 text-sm">
            Bachelor's in Computer Science, Economics
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 font-medium">New Haven, CT</p>
          <p className="text-gray-400 text-sm">May 2023</p>
        </div>
      </div>
      <CoursePicker />
      <SkillsPicker />

      <h2 className={utilStyles.headingLg}>Experience</h2>
      <h2 className={utilStyles.headingLg}>Projects</h2>
    </>
  );
}
