import React from "react";
import { Text, Bold } from "~/components/StyledText";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Banner = (props) => {
  return (
    <View style={styles.wrapper}>
      <InnerBanner {...props} />
    </View>
  );
};

const InnerBanner = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        props.navigation.navigate("Check");
      }}
    >
      <View style={styles.innerBannerWrapper}>
        <View style={styles.innerBannerInnerText}>
          <Bold style={styles.headerText}>Self Check Up Covid-19</Bold>
          <Text style={styles.subtitle}>
            Contains several lists of questions to check your physical condition
          </Text>
        </View>
        <View>
          <AntDesign name="right" size={20} color={"#fff"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Banner;

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 25,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  innerBannerWrapper: {
    // borderColor: "green",
    // borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#212B46",
  },
  innerBannerInnerText: {
    paddingHorizontal: 25,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    paddingVertical: 5,
  },
  subtitle: {
    color: "#fff",
  },
});
