import * as React from "react";
import {
  Platform,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  PageBanner,
  SelfCheckBanner,
  LatestUpdate,
  ActiveCases,
} from "../components";
import { ScrollView } from "react-native-gesture-handler";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <PageBanner />
          <SelfCheckBanner {...props} />
          <LatestUpdate />
          <ActiveCases navigation={props.navigation} />
        </ScrollView>
      </SafeAreaView>
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
