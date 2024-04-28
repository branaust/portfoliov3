import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import Colors from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const WorkHistoryDetailsScreen = (props: Props) => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: id });
  }, [navigation]);

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
