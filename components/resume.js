import utilStyles from "../styles/utils.module.css";
import { CoursePicker, SkillsPicker } from "./parts/education";
import { BentleySystems, CourseTable, Java } from "./parts/experience";

export default function Resume() {
  return (
    <div className="mt-10">
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
      <div className="flex justify-between">
        <div>
          <p className="text-blue-400 font-bold text-lg">Bentley Systems</p>
          <p className="text-gray-400 text-sm">Software Engineer Intern</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 font-medium">Exton, PA</p>
          <p className="text-gray-400 text-sm">May-Aug 2022</p>
        </div>
      </div>
      <BentleySystems />
      <div className="flex justify-between">
        <div>
          <p className="text-blue-400 font-bold text-lg">CourseTable</p>
          <p className="text-gray-400 text-sm">Software Developer</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 font-medium">New Haven, CT</p>
          <p className="text-gray-400 text-sm">Feb-Nov 2021</p>
        </div>
      </div>
      <CourseTable />
      <div className="flex justify-between">
        <div>
          <p className="text-blue-400 font-bold text-lg">
            The Java Programming Language, 3rd ed.
          </p>
          <p className="text-gray-400 text-sm">Author</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 font-medium">Little Rock, AR</p>
          <p className="text-gray-400 text-sm">May-Aug 2018</p>
        </div>
      </div>
      <Java />

      <h2 className={utilStyles.headingLg}>Projects</h2>
      <i>TBA...</i>
    </div>
  );
}
