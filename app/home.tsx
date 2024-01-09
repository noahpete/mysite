import Tv from "./tv";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [down, setDown] = useState("hidden");

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    setTimeout(() => {
      setDown("gif");
      setTimeout(() => {
        setDown("png");
      }, 490);
    }, 2000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="home" className="h-[80vh] w-screen bg-slate-100">
        <div className="scale-[85%] translate-y-8">
          <Tv />
        </div>
        <img
          className="absolute translate-y-142 -translate-x-2 mx-auto left-0 right-0 bottom-0 scale-[0.3]"
          src={
            down === "hidden" ? "" : down === "gif" ? "/down.gif" : "/down.png"
          }
          alt=""
          style={{
            opacity: Math.max(0, 1 - scrollPosition / 300),
          }}
        />
      </div>
      <div id="gradient"></div>
    </div>
  );
}
