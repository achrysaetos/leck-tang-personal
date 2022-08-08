import { useState } from "react";
import cx from "classnames";

const bentley = {
  show: [
    "Advancing infrastructure. React and TypeScript for the iTwin Platform.",
  ],
};

const coursetable = {
  show: ["Full-stack web dev with React, TypeScript, Node, and GraphQL."],
};

const java = {
  show: [
    "Distributed to over 51 countries and 20 different online retailers including iTunes and Barnes & Noble.",
    "Reached #21 on the iBooks Store under the Computers and Internet category.",
    "Listed on the “What’s Hot” section of iTunes in September 2017.",
  ],
};

export function BentleySystems() {
  const categories = ["show"];
  const [selected, setSelected] = useState({
    show: false,
  });
  const { show } = bentley;

  return (
    <div className="border rounded-xl p-2 px-4 my-4">
      <div className="flex">
        <div className="font-bold mr-auto">Description</div>
        <div className="flex gap-2">
          {categories.map((c) => (
            <button
              className={cx(
                "rounded px-3 text-gray-500",
                selected[c] && " bg-selected text-black"
              )}
              onClick={() => setSelected({ ...selected, [c]: !selected[c] })}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      {selected.show && show.map((s) => <li className="list-none">{s}</li>)}
    </div>
  );
}

export function CourseTable() {
  const categories = ["show"];
  const [selected, setSelected] = useState({
    show: false,
  });
  const { show } = coursetable;

  return (
    <div className="border rounded-xl p-2 px-4 my-4">
      <div className="flex">
        <div className="font-bold mr-auto">Description</div>
        <div className="flex gap-2">
          {categories.map((c) => (
            <button
              className={cx(
                "rounded px-3 text-gray-500",
                selected[c] && " bg-selected text-black"
              )}
              onClick={() => setSelected({ ...selected, [c]: !selected[c] })}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      {selected.show && show.map((s) => <li className="list-none">{s}</li>)}
    </div>
  );
}

export function Java() {
  const categories = ["show"];
  const [selected, setSelected] = useState({
    show: false,
  });
  const { show } = java;

  return (
    <div className="border rounded-xl p-2 px-4 my-4">
      <div className="flex">
        <div className="font-bold mr-auto">Description</div>
        <div className="flex gap-2">
          {categories.map((c) => (
            <button
              className={cx(
                "rounded px-3 text-gray-500",
                selected[c] && " bg-selected text-black"
              )}
              onClick={() => setSelected({ ...selected, [c]: !selected[c] })}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      {selected.show && show.map((s) => <li className="list-none">{s}</li>)}
    </div>
  );
}
