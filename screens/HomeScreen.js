import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  PageBanner,
  SelfCheckBanner,
  LatestUpdate,
  ActiveCases,
} from "../components";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <PageBanner />
      <SelfCheckBanner {...props} />
      <LatestUpdate />
      <ActiveCases />
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
