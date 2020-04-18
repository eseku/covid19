import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Text, Bold } from "~/components/StyledText";
import { LineChart } from "react-native-chart-kit";

const BezierChart = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.selector}>
          <Bold style={{ color: "#C6C9DC" }}>Daily</Bold>
        </View>
        <View style={styles.selector}>
          <Bold style={{ color: "#C6C9DC" }}>Weekly</Bold>
        </View>
        <View style={styles.selector}>
          <Bold style={{ color: "#C6C9DC" }}>Monthly</Bold>
        </View>
      </View>
      <View style={styles.bezierWrapper}>
        <LineChart
          data={{
            labels: ["19", "20", "21", "22"],
            datasets: [
              {
                data: [
                  parseInt(Math.ceil(Math.random() * 100)),
                  parseInt(Math.ceil(Math.random() * 100)),
                  parseInt(Math.ceil(Math.random() * 100)),
                  parseInt(Math.ceil(Math.random() * 100)),
                  parseInt(Math.ceil(Math.random() * 100)),
                  parseInt(Math.ceil(Math.random() * 100)),
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 50} // from react-native
          height={220}
          yAxisLabel={undefined}
          yAxisSuffix={undefined}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(11, 122, 237, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  fillShadowGradient: "red",
  // propsforBackgroundLines:
};

const styles = StyleSheet.create({
  wrapper: {
    // borderWidth: 1,
    // borderColor: "grey",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  bezierWrapper: {
    borderTopWidth: 0.5,
    borderColor: "#C6C9DC",
    paddingVertical: 5,
  },
  selector: {
    borderColor: "#0B7AED",
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginRight: 30,
  },
});
export default BezierChart;
