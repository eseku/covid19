import React, { useContext, useEffect, useState } from "react";
import { Text, Bold } from "~/components/StyledText";
import { View, StyleSheet, Dimensions } from "react-native";
import Icon from "./Icon";
import { AppContext } from "../context/Context";
import moment from "moment";
import numeral from "numeral";
const screenWidth = Math.round(Dimensions.get("window").width);

const LatestUpdate = () => {
  return (
    <View style={styles.wrapper}>
      <LatestUpdateHeader />
      <LatestUpdateBody />
    </View>
  );
};

const LatestUpdateHeader = () => {
  const context = useContext(AppContext);
  const [country, setCountry] = useState({});
  useEffect(() => {
    GetCountryData();
  }, [context.country, context.summary]);
  return (
    <View style={styles.latestUpdateHeaderWrapper}>
      <View>
        <Bold style={{ fontSize: 20 }}>Covid-19 Latest Update</Bold>
      </View>
      <View style={styles.detailsView}>
        <View>
          <Text style={{ color: "#C3C8DC" }}>
            As at {country && moment(country.Date).fromNow()}
          </Text>
        </View>
        <View>
          <Bold style={{ color: "#118CF4", fontSize: 17 }}>Details</Bold>
        </View>
      </View>
    </View>
  );
  function GetCountryData() {
    const country =
      context.summary?.Countries &&
      context.summary.Countries.find((element) => {
        return element.Slug === context.country.Slug;
      });
    setCountry(country);
  }
};

const LatestUpdateBody = () => {
  const context = useContext(AppContext);
  const [country, setCountry] = useState({});
  useEffect(() => {
    GetCountryData();
  }, [context.country, context.summary]);
  return (
    <View style={styles.latestUpdateBodyWrapper}>
      <LatestUpdateCard
        iconName="plus"
        iconColor="#FFC48C"
        value={
          numeral(country?.TotalConfirmed && country?.TotalConfirmed).format(
            "0,0"
          ) || "..."
        }
        status={"infected"}
      />
      <LatestUpdateCard
        iconName="heart"
        iconColor="#18A571"
        value={
          numeral(country?.TotalRecovered && country?.TotalRecovered).format(
            "0,0"
          ) || "..."
        }
        status={"recovered"}
      />
      <LatestUpdateCard
        iconName="close"
        iconColor="#DC394E"
        value={
          numeral(country?.TotalDeaths && country?.TotalDeaths).format("0,0") ||
          "..."
        }
        status={"deaths"}
      />
    </View>
  );

  function GetCountryData() {
    const country =
      context.summary?.Countries &&
      context.summary.Countries.find((element) => {
        return element.Slug === context.country.Slug;
      });
    setCountry(country);
  }
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
    borderColor: "#E8E8E8",
    borderWidth: 0.3,
    width: (screenWidth - 50) / 3.25,
    alignItems: "center",
    height: 140,
    display: "flex",
    justifyContent: "space-around",
    borderRadius: 5,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "rgba(24, 165, 113, 0.6)",
    shadowOpacity: 0.04,
    backgroundColor: "white",
  },
  latestUpdateCardBody: {
    alignItems: "center",
  },
  latestUpdateNumber: {
    fontSize: 30,
  },
  latestUpdateText: {
    fontSize: 10,
    color: "#9C9C9C",
  },
});
export default LatestUpdate;
