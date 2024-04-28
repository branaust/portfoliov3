import { View, Text, useWindowDimensions } from "react-native";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { BackSide, FrontSide } from "three";

type Props = {};

const Model = (props: Props) => {
  const { nodes } = useGLTF("../assets/medias/torrus.glb");
  const torus = useRef(null);
  const { width } = useWindowDimensions();

  useFrame(() => {
    torus.current.rotation.x += 0.01;
  });

  //   const materialProps = useControls({
  //     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //     roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //     transmission: {value: 1, min: 0, max: 1, step: 0.1},
  //     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //     chromaticAberration: { value: 0.02, min: 0, max: 1},
  //     backside: { value: true},
  // })

  return (
    <group scale={width / 400}>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial
          thickness={0}
          // color={"green"}
          // clearcoat={1}
          roughness={0}
          // transmission={1}
          ior={10}
          chromaticAberration={1}
          backside={true}
          reflectivity={1.5}
        />
      </mesh>
    </group>
  );
};

export default Model;
