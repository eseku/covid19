import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Text, Bold } from "~/components/StyledText";
import { LineChart } from "react-native-chart-kit";

const BezierChart = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.bezierWrapper}>
        <LineChart
          data={{
            labels: ["19", "20", "21", "22"],
            datasets: [
              {
                data: [2, 16, 48, 64, 132],
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
  // backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0,
  color: (opacity = 0) => `rgba(11, 122, 237, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 1,
  fillShadowGradient: "#1E2923",
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
