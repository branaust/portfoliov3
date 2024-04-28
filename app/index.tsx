import { ScrollView, StyleSheet, useWindowDimensions } from "react-native";

import { Text, View } from "@/components/Themed";
import Model from "@/components/Scene/Model";
import Scene from "../components/Scene";

const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1}}>
      {/* TOP LEVEL HERO */}
        {/* <Scene /> */}
        {/* <View style={styles.heroContainer}>
          <Text style={styles.title}>brandon austin</Text>
          <Text style={styles.subtitle}>developer · designer</Text>
        </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"transparent"
  },
  workHistoryContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 120,
    fontWeight: "500",
    lineHeight: 120,
  },
  subtitle: {
    fontSize: 60,
    fontWeight: "400",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default Home;
