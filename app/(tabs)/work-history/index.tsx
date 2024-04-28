import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import WorkItem from "@/components/WorkItem";
import Separator from "@/components/Seperator";

const workHistory: { caption: string; heading: string }[] = [
  { caption: "Lark", heading: "FoodGPT" },
  { caption: "Lark", heading: "Brand Redesign" },
  { caption: "NTWRK", heading: "Live Auctions" },
  { caption: "NTWRK", heading: "Shopping Experience" },
  { caption: "SEQL", heading: "The Athlete App" },
];

const WorkHistoryScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.innerContentWrap}>
          {workHistory.map((item, idx) => (
            <View key={idx}>
              <WorkItem caption={item.caption} heading={item.heading} />
              {idx < workHistory.length - 1 && <Separator />}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContentWrap: {
    paddingVertical: Platform.OS === "web" ? 120 : 40,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WorkHistoryScreen;
