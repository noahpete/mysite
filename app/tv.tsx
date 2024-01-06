import React, { useState, useEffect, useRef } from "react";
import Matter, { IRenderDefinition } from "matter-js";

const Tv: React.FC<TvProps> = ({
  screen = "static",
  topDialDeg = 0,
  bottomDialDeg = 0,
}) => {
  const scene = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(100);
  const [channel, setChannel] = useState("/demos/powerbot-demo1.gif");

  const changeChannel = () => {
    const arr = [
      "/demos/powerbot-demo1.gif",
      "/demos/powerbot-demo2.gif",
      "/demos/powerbot-demo3.gif",
      "/demos/theoryvis-demo1.gif",
      "/demos/theoryvis-demo2.gif",
      "/demos/theoryvis-demo3.gif",
    ];
    const index = Math.floor(Math.random() * arr.length);
    console.log("changing to", arr[index]);
    setChannel(arr[index]);
  };

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Body = Matter.Body,
      Bodies = Matter.Bodies,
      Composites = Matter.Composites,
      Composite = Matter.Composite,
      Constraint = Matter.Constraint,
      Mouse = Matter.Mouse;

    const engine = Engine.create();
    const world = engine.world;

    const render = Render.create({
      element: scene.current || undefined,
      engine: engine,
      options: {
        width: 520,
        height: 300,
        wireframes: false,
        background: "transparent",
      },
    });

    const runner = Runner.create();
    // Render.run(render);
    Runner.run(runner, engine);

    // add bodies
    const cord = Composites.stack(
      300, // 472
      102, // 74
      25, // num sections
      1,
      0,
      0,
      function (x: number, y: number) {
        return Bodies.rectangle(x, y, 2, 3, {
          collisionFilter: { group: Body.nextGroup(true) },
          render: {
            fillStyle: "rgba(0, 0, 0, 0)", // Set rectangle color to black
          },
        });
      }
    );
    Composites.chain(cord, 0, 0, 0.1, 0, {
      stiffness: 0.8,
      length: 6,
      render: {
        type: "line",
        strokeStyle: "rgba(0, 0, 0, 1)",
        lineWidth: 3,
        anchors: false,
      },
    });
    Composite.add(
      cord,
      Constraint.create({
        bodyB: cord.bodies[0],
        pointB: { x: 5, y: 0 },
        pointA: {
          x: cord.bodies[0].position.x,
          y: cord.bodies[0].position.y,
        },
        stiffness: 0.8,
        render: { strokeStyle: "rgba(0, 0, 0, 0)" },
      })
    );
    Composite.add(
      cord,
      Constraint.create({
        bodyB: cord.bodies[cord.bodies.length - 1],
        pointB: { x: 0, y: 0 },
        pointA: {
          x: 475,
          y: 83,
        },
        stiffness: 0.8,
        length: 3,
        render: { strokeStyle: "rgba(0, 0, 0, 0)" },
      })
    );

    Composite.add(world, [cord]);

    // add mouse control
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    Render.run(render);

    // dim static every few seconds
    const intervalId = setInterval(() => {
      setOpacity(0.35);
      setTimeout(() => {
        setOpacity(1);
      }, 1500);
      setTimeout(() => {
        changeChannel();
      }, 4000);
    }, 6000);

    return () => {
      clearInterval(intervalId);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      if (scene.current) {
        scene.current.removeChild(render.canvas);
      }
    };
  }, []);

  return (
    <div
      id="tv"
      className="relative mx-auto -translate-x-16 md:translate-x-0 w-[280px] md:w-[500px] transition-all translate-y-64"
    >
      <div
        id="cord"
        className="absolute z-20 md:translate-x-0 md:translate-y-0 -translate-y-[32px] -translate-x-[110px] transition-all"
        ref={scene}
      ></div>
      <img className="z-30 absolute w-[400px] transition-all" src="/tv.png" />
      <img
        src="/static.png"
        className={`z-10 absolute top-1/2 left-1/2 w-[160px] -translate-x-[110px] md:w-[245px] md:-translate-x-[205px] translate-y-1 transition-all`}
        style={{ opacity: opacity, transitionDuration: "2s" }}
      />
      <img
        src={channel}
        className="absolute z-0 w-[200px] md:w-[335px] translate-x-4 md:translate-x-[20px] translate-y-4 transition-all"
        alt="Channel"
      />
      <img
        src="/outlet.png"
        className="absolute top-1/2 left-1/2 translate-x-[216px] md:translate-y-14 translate-y-[24px] max-w-12 transition-all"
      />
      <img
        src="/plug.png"
        className="absolute top-1/2 left-1/2 translate-x-[218px] md:translate-y-[60px] translate-y-[28px] max-w-10 transition-all"
      />
      <img
        src="/dial.png"
        className={`absolute top-1/2 left-1/2 md:translate-x-[70px] md:translate-y-[20px] translate-y-[11px] translate-x-[81px] max-w-[8px] md:max-w-[10px] z-40 rotate-0 transition-all`}
      />
      <img
        src="/dial.png"
        className={`absolute top-1/2 left-1/2 max-w-[8px] z-40 translate-x-[80px] translate-y-[52px] md:max-w-[10px] md:translate-x-[68px] md:translate-y-[78px] rotate-0 transition-all`}
      />
    </div>
  );
};

export default Tv;
