import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Colors from "@/constants/Colors";

type Props = {};

const WorkHistoryDetailsScreen = (props: Props) => {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.background
  },
});

export default WorkHistoryDetailsScreen;
