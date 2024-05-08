import { Platform, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { Image } from "expo-image";
import { Link } from "expo-router";
import Separator from "@/components/Seperator";
import XSvg from "@/assets/images/XSvg";

const InfoScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          style={styles.selfie}
          source={require("../../assets/images/selfie.jpeg")}
        />
        <Text style={styles.infoChunk}>
          brandon austin is a software engineer and designer currently focused
          in the mobile application space and has previously worked for lark,
          ntwrk and seql. with over 7 years of experience creating world-class
          digital products, his work is a blend of several disciplines—product
          design, ux design and writing software.
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
        <Separator />
        {/* {Platform.OS === "web" && ( */}
          <>
            <Text style={styles.snackDescription}>
              Link to portfolio repo: &nbsp;
              <Link style={styles.repoLink} href="https://github.com/branaust/portfoliov3">https://github.com/branaust/portfoliov3</Link>
            </Text>
            {/* <Image
              contentFit="contain"
              style={{ height: 500, width: 600 }}
              source={require("../../assets/images/dummySnack.png")}
            /> */}
          </>
        {/* )} */}
        <View style={styles.contactWrapper}>
          <Link href="mailto: b.austin7007@gmail.com">
            <Text style={styles.contactText}>email</Text>
          </Link>
          <Text style={styles.contactText}>·</Text>
          <Link href="http://x.com/bran_aust">
            <XSvg/>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  selfie: {
    height: 250,
    width: 250,
    borderRadius: 250,
  },
  scrollViewContent: {
    alignItems: Platform.OS === "web" ? "flex-start" : "center",
    paddingVertical: Platform.OS === "web" ? 120 : 40,
    paddingHorizontal: 24,
    gap: 30,
  },
  infoChunk: {
    fontSize: 18,
    fontWeight: "400",
    maxWidth: 800,
  },
  snack: {
    paddingTop: 50,
  },
  snackDescription: {
    fontSize: 16,
    maxWidth: 600,
    paddingBottom: 16,
  },
  contactWrapper: {
    gap: 8,
    flexDirection:"row",
    alignItems: "center"
  },
  repoLink: {
    color: "orange",
    fontWeight: "700"
  },
  contactText: {
    fontSize: 24,
    fontWeight: "600",
  },

});

export default InfoScreen;
