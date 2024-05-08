import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "./Themed";
import { Link } from "expo-router";

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <Link href="/">
        <Text>Brandon Austin</Text>
      </Link>
      <View style={styles.rightWrap}>
        <Link href="/work-history/">
          <Text>Work</Text>
        </Link>
        <Text>·</Text>
        <Link href="/info">
          <Text>Info</Text>
        </Link>
      </View>
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
    width: 30,
  },
  rightWrap: {
    flexDirection: "row",
    gap: 8,
  },
});

export default CustomHeader;
