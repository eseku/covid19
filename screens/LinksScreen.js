import * as React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { AssessmentQuestions } from "~/components/Assessment";
import { Ionicons } from "@expo/vector-icons";

export default function LinksScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.back}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.pop();
              }}
            >
              <Ionicons name={"ios-arrow-back"} size={30} color="white" />
            </TouchableOpacity>
          </View>
          <AssessmentQuestions />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212B46",
    borderWidth: 0,
    borderColor: "green",
  },
  safeAreaViewWrapper: {
    borderWidth: 0,
    borderColor: "pink",
    flex: 1,
  },
  back: {
    borderColor: "white",
    borderWidth: 0,
    paddingVertical: 20,
    paddingHorizontal: 25,
    display: "flex",
    flexDirection: "row",
  },
  backButton: {
    borderColor: "red",
    borderWidth: 0,
    paddingRight: 10,
  },
});
