import React, { useState, useEffect, useRef } from "react";
import Matter, { IRenderDefinition } from "matter-js";

const Tv: React.FC<TvProps> = ({
  screen = "static",
  topDialDeg = 0,
  bottomDialDeg = 0,
}) => {
  const scene = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

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
        width: 500,
        height: 250,
        wireframes: false,
        background: "transparent",
      },
    });

    const runner = Runner.create();
    // Render.run(render);
    Runner.run(runner, engine);

    // add bodies
    const cord = Composites.stack(
      270,
      60,
      40,
      1,
      0,
      0,
      function (x: number, y: number) {
        return Bodies.rectangle(x, y, 6, 3, {
          collisionFilter: { group: Body.nextGroup(true) },
          render: {
            fillStyle: "#000000", // Set rectangle color to black
          },
        });
      }
    );
    Composites.chain(cord, 0, 0, 0.5, 0, {
      stiffness: 0.95,
      length: 2,
      render: { type: "line", strokeStyle: "rgba(0, 0, 0, 0)" },
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
        stiffness: 0.5,
        render: { strokeStyle: "rgba(0, 0, 0, 0)" },
      })
    );
    Composite.add(
      cord,
      Constraint.create({
        bodyB: cord.bodies[cord.bodies.length - 1],
        pointB: { x: 0, y: 0 },
        pointA: {
          x: 407,
          y: 79,
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

    // const runner = Runner.create();
    Render.run(render);
    // Runner.run(runner, engine);

    const intervalId = setInterval(() => {
      // Fade to 25% opacity
      setOpacity(0.15);

      // Reset opacity to 100% after a short delay (e.g., 1 second)
      setTimeout(() => {
        setOpacity(1);
      }, 1000);
    }, 4000); // Repeat every 6 seconds

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
    <div className="min-w-[420px] min-h-[210px]">
      <img
        src="/outlet.png"
        className="absolute ml-[400px] mt-[60px] max-w-10"
      />
      <img src="/plug.png" className="absolute ml-[400px] mt-[60px] max-w-10" />
      <div className="absolute" ref={scene}></div>
      {screen === "static" && (
        <img
          className={`absolute z-10 transition-all opacity-[${opacity}] ml-10 mt-2 max-w-[180px]`}
          src="/static.png"
        />
      )}
      <img
        className="absolute z-0 mt-6 max-w-[300px]"
        src="/demos/powerbot-demo1.gif"
        alt="Powerbot demo"
      />
      <img className="absolute z-30 max-w-[320px]" src="/tv.png" />
      <img
        src="/dial.png"
        className={`max-w-[8px] z-40 absolute ml-[254px] mt-[19px] rotate-${topDialDeg}`}
      />
      <img
        src="/dial.png"
        className={`max-w-[8px] z-40 absolute ml-[254px] mt-[64px] rotate-${bottomDialDeg}`}
      />
    </div>
  );
};

export default Tv;
