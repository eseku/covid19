import React, { useContext } from "react";
import { Text, Bold } from "~/components/StyledText";
import { View, StyleSheet, Dimensions } from "react-native";
import Icon from "./Icon";
import { AppContext } from "../context/Context";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const LatestUpdate = () => {
  return (
    <View style={styles.wrapper}>
      <LatestUpdateHeader />
      <LatestUpdateBody />
    </View>
  );
};

const LatestUpdateHeader = () => {
  return (
    <View style={styles.latestUpdateHeaderWrapper}>
      <View>
        <Bold style={{ fontSize: 20 }}>Covid-19 Latest Update</Bold>
      </View>
      <View style={styles.detailsView}>
        <View>
          <Text style={{ color: "#C3C8DC" }}>
            Last Updated 25 Mar 20 . 16:37 WIB
          </Text>
        </View>
        <View>
          <Bold style={{ color: "#118CF4", fontSize: 17 }}>Details</Bold>
        </View>
      </View>
    </View>
  );
};

const LatestUpdateBody = () => {
  const context = useContext(AppContext);
  return (
    <View style={styles.latestUpdateBodyWrapper}>
      <LatestUpdateCard
        iconName="plus"
        iconColor="#FFC48C"
        value={context.countryData?.countrydata[0]["total_active_cases"]}
        status={"infected"}
      />
      <LatestUpdateCard
        iconName="heart"
        iconColor="#18A571"
        value={context.countryData?.countrydata[0]["total_recovered"]}
        status={"recovered"}
      />
      <LatestUpdateCard
        iconName="close"
        iconColor="#DC394E"
        value={context.countryData?.countrydata[0]["total_deaths"]}
        status={"deaths"}
      />
    </View>
  );
};

const LatestUpdateCard = (props) => {
  return (
    <View style={styles.latestUpdateCardWrapper}>
      <View>
        {/* <AntDesign name={props.iconName} color={props.iconColor} /> */}
        <Icon name={props.iconName} color={props.iconColor} />
      </View>
      <View style={styles.latestUpdateCardBody}>
        <View>
          <Bold style={[styles.latestUpdateNumber, { color: props.iconColor }]}>
            {props.value}
          </Bold>
        </View>
        <View>
          <Text style={styles.latestUpdateText}>
            {props.status.toUpperCase()}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // borderWidth: 1,
    // borderColor: "yellow",
    paddingHorizontal: 25,
  },
  detailsView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  latestUpdateHeaderWrapper: {
    // borderWidth: 1,
    // borderColor: "tomato",
    paddingVertical: 20,
  },
  latestUpdateBodyWrapper: {
    // borderWidth: 1,
    // borderColor: "violet",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  latestUpdateCardWrapper: {
    borderColor: "#C6C9DC",
    borderWidth: 0.3,
    width: (screenWidth - 50) / 3.25,
    alignItems: "center",
    height: 140,
    display: "flex",
    justifyContent: "space-around",
    borderRadius: 5,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "rgb(24, 165, 113)",
    shadowOpacity: 0.04,
    backgroundColor: "#fff",
  },
  latestUpdateCardBody: {
    alignItems: "center",
  },
  latestUpdateNumber: {
    fontSize: 40,
  },
  latestUpdateText: {
    fontSize: 10,
    color: "#9C9C9C",
  },
});
export default LatestUpdate;
