import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { Image } from "expo-image";

const InfoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          style={styles.selfie}
          source={require("../assets/images/selfie.jpeg")}
        />
        <Text style={styles.infoChunk}>
          brandon austin is a software engineer currently focused in the mobile
          application space and has previously worked for lark, ntwrk and seql.
          with over 7 years of experience creating world-class digital products,
          his work is a blend of several disciplines—product design, ux design
          and writing software.
        </Text>
        <Text style={styles.infoChunk}>
          he enjoys leading and building teams and establishing new processes,
          having brought life changing features to the hands of hundreds of
          thousands of users throughout the course of his career.
        </Text>
        <Text style={styles.infoChunk}>
          he is inspired by his peers and colleagues, emerging technology and
          design techniques, creative writing, music, photography and anything
          related to fitness.
        </Text>
        <View style={styles.snack}>
          <Text style={styles.snackDescription}>
            this portfolio was designed by myself and built with react native.
            review the code and preview the site as a native app below:
          </Text>
          <Image
            contentFit="contain"
            style={{ height: 500, width: 600 }}
            source={require("../assets/images/dummySnack.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  selfie: {
    height: 250,
    width: 250,
    borderRadius: 250,
  },
  infoContainer: {
    paddingTop: 120,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 50,
  },
  infoChunk: {
    fontSize: 24,
    fontWeight: "400",
    maxWidth: 800,
  },
  snack: {
    alignItems:"center",
    paddingTop: 50,
  },
  snackDescription: {
    fontSize: 16,
    maxWidth: 800,
  },
});

export default InfoScreen;
