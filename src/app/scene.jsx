import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  useProgress,
} from "@react-three/drei";
import CircularProgress from "@mui/material/CircularProgress";
import MinimalDefault from "./models/minimal_default";

export default function Scene() {
  const medium = {
    canvasWidth: "min-w-[70vw]",
  };

  const Loader = () => {
    const { progress } = useProgress();
    return (
      <Html center>
        <CircularProgress color="inherit" />
      </Html>
    );
  };

  return (
    <div className="row-span-1 row-start-1 mt-4 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0 md:-ml-52 min-w-[70vw]"
        shadows
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [2, 1, 0], fov: 30 }}
      >
        <Suspense fallback={<Loader />}>
          <MinimalDefault scale={0.3} position={[0, -0.5, 0]} />
          <ContactShadows
            position={[0, -0.6, 0]}
            opacity={0.8}
            scale={30}
            blur={0.8}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}