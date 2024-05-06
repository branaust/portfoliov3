import Model from "@/components/Model";
import { View } from "@/components/Themed";
import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* TOP LEVEL HERO */}
      {/* TODO: get 3D model working on mobile */}
      {/* <Scene /> */}
      <Canvas>
        <Suspense fallback={null}>
          {/* <Model /> */}
        </Suspense>
      </Canvas>
    </View>
  );
};

export default Home;
