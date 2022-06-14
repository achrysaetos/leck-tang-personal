import utilStyles from "../styles/utils.module.css";

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
  activities: [
    "Yale Computer Society",
    "Yale Entrepreneurial",
  ]
};


export default function Resume() {
  const { cs, econ, activities } = classes;
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
      <details className="mt-4">
        <div className="flex flex-wrap pl-4">{cs.join(", ")}</div>
        <summary className="select-none cursor-pointer">Relevant CS Courses</summary>
      </details>
      <details className="mt-1">
        <div className="flex flex-wrap pl-4">{econ.join(", ")}</div>
        <summary className="select-none cursor-pointer">Relevant ECON Courses</summary>
      </details>
      <details className="mt-1">
        <div className="flex flex-wrap pl-4">{activities.join(", ")}</div>
        <summary className="select-none cursor-pointer">Activities and Societies</summary>
      </details>
      <h2 className={utilStyles.headingLg}>Skills</h2>
      <h2 className={utilStyles.headingLg}>Experience</h2>
      <h2 className={utilStyles.headingLg}>Projects</h2>
    </>
  );
}
