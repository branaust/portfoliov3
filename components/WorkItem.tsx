import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "./Themed";

type Props = {
  heading: string;
  caption: string;
};

const WorkItem = ({ heading, caption }: Props) => {
  return (
    <View>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  caption: {},
  heading: {
    fontSize: 80,
  },
});

export default WorkItem;
