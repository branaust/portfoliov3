import { useWindowDimensions } from "react-native";
import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = () => {
  const mesh = useRef();
  const { nodes, materials } = useGLTF("../assets/torrus.glb");
  const { width } = useWindowDimensions();

  console.log({width})

  useFrame(() => {
    mesh.current.rotation.x += 0.02;
  });
  return (
    <group scale={width > 1400 ? width/400 : width / 300}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry!}
        material={materials.Material}
      >
        <MeshTransmissionMaterial />
      </mesh>
    </group>
  );
};

export default Model;
