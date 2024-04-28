import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import WorkItem from "@/components/WorkItem";

const workHistory: { caption: string; heading: string }[] = [
  { caption: "Lark", heading: "FoodGPT" },
  { caption: "Lark", heading: "Brand Redesign" },
  { caption: "NTWRK", heading: "Live Auctions" },
  { caption: "NTWRK", heading: "Shopping Experience" },
  { caption: "SEQL", heading: "The Athlete App" },
];

const WorkHistoryScreen = () => {
  return (
    <ScrollView>
      <View style={styles.innerContentWrap}>
        {workHistory.map((item, idx) => (
          <View key={idx}>
            <WorkItem caption={item.caption} heading={item.heading} />
            {idx < workHistory.length - 1 && <View style={styles.separator} />}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  innerContentWrap: {
    paddingVertical: 120,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: "#000",
  },
});

export default WorkHistoryScreen;
