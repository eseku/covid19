import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "~/components/StyledText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Selector from "./CountrySelector";
import moment from "moment";

const PageBanner = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.bannerInnerWrapper}>
        <View style={styles.top}>
          <View>
            <Text style={{ fontSize: 20 }}>Current outbreak</Text>
          </View>
          <View style={{ position: "relative" }}>
            <MaterialCommunityIcons name="bell" size={35} color={"#C3C8DC"} style={{}} />
            <View style={{
              backgroundColor: "#E3342F",
              justifyContent: "center",
              alignItems: "center",
              width: 15,
              height: 15,
              borderRadius: "50%",
              position: "absolute",
              right: 0
            }}>
              <Text style={{ color: "#fff" }}>1</Text>
            </View>
          </View>
        </View>
        <Selector />
        <View>
          <Text style={styles.dateTextStyle}>
            {moment().format("ddd, D MMM YY")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PageBanner;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    // borderColor: "red",
    // borderWidth: 1,
  },
  bannerInnerWrapper: {
    // borderColor: "#8E3E9E",
    // borderWidth: 1,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dateTextStyle: {
    color: "#C3C8DC",
    fontSize: 15,
  },
});
