import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import BezierChart from "./BezierChart";
import { Bold } from "~/components/StyledText";
import { AntDesign } from "@expo/vector-icons";
import { AppContext } from "~/context/Context";

const ActiveCases = (props) => {
  const context = useContext(AppContext);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View>
          <Bold style={{ fontSize: 20, color: "#118CF4" }}>
            Confirmed Cases
          </Bold>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log(props.navigation.navigate("PickDate"));
          }}
        >
          <Bold style={{ color: "#118CF4" }}>
            {context.filters.startDate.format("DD MMM")} - Today
            <AntDesign
              name={"caretright"}
              color={"#C3C8DC"}
              style={{}}
            />
          </Bold>
        </TouchableOpacity>
      </View>
      <View>
        <BezierChart />
      </View>
    </View>
  );
};

export default ActiveCases;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 25,
    // paddingTop: 40,
    // borderColor: "#F639E5",
    // borderWidth: 1,
    display: "flex",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    // borderColor: "green",
    // borderWidth: 1,
  },
});
