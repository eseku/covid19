import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "~/components/StyledText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Selector from "./CountrySelector";

const PageBanner = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.bannerInnerWrapper}>
        <View style={styles.top}>
          <View>
            <Text style={{ fontSize: 20 }}>Current outbreak</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="bell" size={30} color={"#C3C8DC"} />
          </View>
        </View>
        <Selector />
        <View>
          <Text style={styles.dateTextStyle}>Wed, 25 Mar 20</Text>
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