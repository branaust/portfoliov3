import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "./Themed";
import { Link } from "expo-router";

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <View />
      {/* This will nav to /index and scroll down to work-history screen*/}
      <Link href="/work-history">
        <Text style={styles.headerText}>work</Text>
      </Link>
      <Link href="/info">
        <Text style={styles.headerText}>info</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: "transparent",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  headerText: {
    fontWeight: "500",
    fontSize: 16,
  },
});

export default CustomHeader;
