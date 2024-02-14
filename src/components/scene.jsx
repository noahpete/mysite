import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Html } from "@react-three/drei";
import CircularProgress from "@mui/material/CircularProgress";
import MinimalDefault from "@/components/minimal_default";

export default function Scene() {
  const Loader = () => {
    return (
      <Html center>
        <CircularProgress color="inherit" />
      </Html>
    );
  };

  return (
    <div className="row-span-1 sm:ml-32 row-start-1 mt-4 aspect-square md:col-span-2 md:col-start-1 md:ml-64 md:-mt-24 lg:-mt-48">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [2, 1, 0], fov: 30 }}
      >
        <Suspense fallback={<Loader />}>
          <MinimalDefault scale={0.3} position={[0, -0.5, 0]} />
          <ContactShadows
            position={[0, -0.6, 0]}
            opacity={0.6}
            scale={10}
            blur={0.8}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
