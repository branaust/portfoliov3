import { View, StyleSheet } from "react-native";
import React from "react";

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: "#000",
  },
});

export default Separator;
