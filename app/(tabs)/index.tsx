import Scene from "@/components/Scene";
import { View } from "@/components/Themed";
import { Canvas } from "@react-three/fiber";
import { Link } from "expo-router";
import { Text } from "@/components/Themed";
import { StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Scene />
      <Link href="https://branaust.substack.com/?utm_source=discover_search" style={styles.newsletterText}>
        <Text>Newsletter</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  newsletterText: {
    fontWeight: "600",
    fontSize: 16,
    paddingHorizontal: 24,
    paddingBottom: 24
  },
});

export default Home;
