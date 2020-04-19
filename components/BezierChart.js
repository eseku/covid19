import React, { useContext, useState, useEffect } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import moment from "moment";
import { LineChart } from "react-native-chart-kit";
import { AppContext } from "~/context/Context";
import Axios from "axios";
import numeral from "numeral";

const BezierChart = (props) => {
  const context = useContext(AppContext);

  const [casesPlot, setCasesPlot] = useState({
    labels: [
      moment("2020-03-18T00:00:00Z").format("DD"),
      moment("2020-03-19T00:00:00Z").format("DD"),
      moment("2020-03-20T00:00:00Z").format("DD"),
      moment("2020-03-21T00:00:00Z").format("DD"),
      moment("2020-03-22T00:00:00Z").format("DD"),
    ],
    points: [7, 11, 16, 19, 23],
  });
  useEffect(() => {
    getData();
  }, [context.filters, context.country]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.bezierWrapper}>
        <LineChart
          data={{
            labels: casesPlot.labels || [0, 0, 0, 0, 0],
            datasets: [
              {
                data: casesPlot.points || [0, 0, 0, 0, 0],
              },
            ],
          }}
          width={Dimensions.get("window").width - 50} // from react-native
          height={220}
          yAxisLabel={undefined}
          yAxisSuffix={undefined}
          yAxisInterval={1} // optional, defaults to 1
          formatYLabel={(value) =>
            numeral(Number(String(value).split(".")[0])).format("0,0")
          }
          formatXLabel={(value) => moment(value).format("DD MMM")}
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

  function getData() {
    Axios.get(
      `https://api.covid19api.com/country/${context.country?.Slug}/status/confirmed/live?from=${context.filters.startDate}&to=${context.filters.endDate}`
    )
      .then(({ data }) => {
        const sortedData = {
          labels: data
            .map((element) => moment(element.Date))
            .filter((element) =>
              element.isSameOrAfter(context.filters.startDate)
            ),
          points: data
            .map(({ Date, Cases }) => {
              return { Date, Cases };
            })
            .filter(({ Date }) => {
              return moment(Date).isSameOrAfter(context.filters.startDate);
            })
            .map((element) => moment(element.Cases)),
        };
        // console.log(sortedData);
        setCasesPlot(sortedData);
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
const chartConfig = {
  // backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0,
  color: (opacity = 0) => `rgba(11, 122, 237, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 1,
  fillShadowGradient: "rgba(11, 122, 237, 0.05)",
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
