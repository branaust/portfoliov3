import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

type Props = {};

const Scene = (props: Props) => {
  return (
    <Canvas style={{ backgroundColor: "transparent" }}>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      <Model />
    </Canvas>
  );
};

export default Scene;
