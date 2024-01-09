import { useEffect, useState } from "react";

export default function Projects() {
  const [active, setActive] = useState(0);

  const handleSwitch = (projId: number) => {
    if (active === projId) {
      setActive(0);
    } else {
      setActive(projId);
    }
  };

  return (
    <div id="projects" className="">
      <div className="h-16 w-full"></div>
      <div className="mx-auto w-[80vw] h-[400px] p-2">
        <div
          id="project"
          className="mx-auto h-fit border-t-2 flex transition-all"
        >
          <img
            src="/down.png"
            className={`${
              active === 1 ? "" : "-rotate-90"
            } h-16 scale-50 -ml-8 my-2 cursor-pointer transition-all`}
            alt=""
            onClick={() => handleSwitch(1)}
          />
          <div id="desc" className="my-auto -ml-2">
            <p>Powerbot</p>
            <p className="text text-slate-400">
              Music video aggregator and chorus identifier.
            </p>
          </div>
        </div>
        <div
          className={
            active === 1
              ? "h-8 opacity-100 transition-all"
              : "h-0 opacity-0 transition-all"
          }
        >
          <div className="">alpha</div>
        </div>
        <div className="mx-auto h-24 border-t-2"></div>
      </div>
    </div>
  );
}
