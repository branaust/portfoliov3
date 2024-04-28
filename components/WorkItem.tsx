import { View, StyleSheet, Platform } from "react-native";
import React from "react";
import { Text } from "./Themed";
import { Link } from "expo-router";

type Props = {
  heading: string;
  caption: string;
};

const WorkItem = ({ heading, caption }: Props) => {
  return (
    <Link
      href={{
        pathname: `/work-history/${heading}`,
      }}
    >
      <View>
        <Text>{caption}</Text>
        <Text style={styles.heading}>{heading}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: Platform.OS === "web" ? 80 : 60,
  },
});

export default WorkItem;
