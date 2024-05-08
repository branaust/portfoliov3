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
      <Text style={{fontSize: 45, fontWeight: "500", paddingBottom: 30}}>This page is currently under maintenance</Text>
      <iframe src="https://giphy.com/embed/HOsHtiVdeypFxOhLAf" width="480" height="270" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/gaming-super-mario-bros-brothers-HOsHtiVdeypFxOhLAf"></a></p>
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
