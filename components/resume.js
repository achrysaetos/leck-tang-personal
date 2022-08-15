import utilStyles from "../styles/utils.module.css";
import { CoursePicker, SkillsPicker } from "./parts/education";
import { BentleySystems, CourseTable, Java } from "./parts/experience";

export default function Resume() {
  return (
    <div className="mt-10">
      <hr className="mt-10"/>
      <h2 className={utilStyles.headingLg}>Education</h2>
      <div className="flex justify-between">
        <div>
          <p className="text-important font-bold text-lg">Yale University</p>
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

      <hr className="mt-10"/>
      <h2 className={utilStyles.headingLg}>Experience</h2>
      <div className="flex justify-between">
        <div>
          <p className="text-important font-bold text-lg">Software Engineer Intern</p>
          <p className="text-gray-400 text-sm">Bentley Systems</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 font-medium">Exton, PA</p>
          <p className="text-gray-400 text-sm">May-Aug 2022</p>
        </div>
      </div>
      <BentleySystems />
      <div className="flex justify-between">
        <div>
          <p className="text-important font-bold text-lg">Software Developer</p>
          <p className="text-gray-400 text-sm">CourseTable</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 font-medium">New Haven, CT</p>
          <p className="text-gray-400 text-sm">Feb-Nov 2021</p>
        </div>
      </div>
      <CourseTable />
      <div className="flex justify-between">
        <div>
          <p className="text-important font-bold text-lg">
            Software Author
          </p>
          <p className="text-gray-400 text-sm">The Java Programming Language, 3rd ed.</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 font-medium">Little Rock, AR</p>
          <p className="text-gray-400 text-sm">May-Aug 2018</p>
        </div>
      </div>
      <Java />

      <hr className="mt-10"/>
      <h2 className={utilStyles.headingLg}>Projects</h2>
      <div className="flex items-baseline">
        <a href="https://github.com/yale-swe/s22-college-sublet" className="text-important text-lg pr-2">HouseMe</a>
        <p className="text-gray-400 text-sm">A subletting web service exclusively for college students</p>
      </div>
      <div className="flex items-baseline">
        <a href="https://github.com/achrysaetos/Twitter-clone" className="text-important text-lg pr-2">Twitter Clone</a>
        <p className="text-gray-400 text-sm">A fully functional social networking web app</p>
      </div>
      <div className="flex items-baseline">
        <a href="https://github.com/achrysaetos/indeedio" className="text-important text-lg pr-2">Indeedio</a>
        <p className="text-gray-400 text-sm">A personalized job search web app for software engineers</p>
      </div>
      <div className="flex items-baseline">
        <a href="https://github.com/achrysaetos/betterNEWS" className="text-important text-lg pr-2">BetterNEWS</a>
        <p className="text-gray-400 text-sm">A celebrity news aggregator for most recent headlines</p>
      </div>
      <div className="flex items-baseline">
        <a href="https://github.com/achrysaetos/lstm-poc" className="text-important text-lg pr-2">LSTM (poc)</a>
        <p className="text-gray-400 text-sm">ML models for predicting trends like weather/crypto</p>
      </div>
      <div className="flex items-baseline justify-end">
        <a href="https://github.com/achrysaetos" className="text-important text-sm pr-2">more...</a>
      </div>
    </div>
  );
}
