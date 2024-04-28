import { View, StyleSheet } from "react-native";
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
        params: { id: heading },
      }}
    >
      <View>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.heading}>{heading}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  caption: {},
  heading: {
    fontSize: 80,
  },
});

export default WorkItem;
