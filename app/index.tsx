import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      {/* TOP LEVEL HERO */}
      <View style={styles.heroContainer}>
        <Text style={styles.title}>brandon austin</Text>
        <Text style={styles.subtitle}>developer · designer</Text>
      </View>
      {/* WORK HISTORY */}
      <View style={styles.workHistoryContainer}>
        <Text style={styles.title}>brandon austin</Text>
        <Text style={styles.subtitle}>developer · designer</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
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

export default Home