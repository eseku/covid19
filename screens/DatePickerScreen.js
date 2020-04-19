import React, { useContext, useState } from "react";
import {
  Platform,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { AppContext } from "~/context/Context";
import { Bold, Text } from "~/components/StyledText";
import { DatePicker } from "~/components";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";

function DatePickerScreen(props) {
  const context = useContext(AppContext);
  const [dates, setDates] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
      <View style={styles.content}>
        <View style={styles.back}>
          <TouchableOpacity
            style={{
              flex: 1,
            }}
            onPress={() => {
              props.navigation.pop();
            }}
          >
            <Ionicons name={"ios-arrow-back"} size={30} color="#fff" />
          </TouchableOpacity>
          <View style={{ flex: 5 }}>
            <Bold
              style={{
                backgroundColor: "#50646B",
                color: "#fff",
                fontSize: 20,
              }}
            >
              Select Date
            </Bold>
          </View>
        </View>
        <View style={{ flexGrow: 1 }}>
          <View
            style={{
              backgroundColor: "#212B46",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 25,
              paddingVertical: 25,
              alignItems: "center",
            }}
          >
            <View style={{ borderColor: "#118CF4", borderBottomWidth: 2 }}>
              <Bold style={{ fontSize: 25, color: "#fff" }}>
                {moment(dates.startDate || context.filters.startDate).format(
                  "DD MMM YYYY"
                )}
              </Bold>
              {/* <DatePicker initialDate={moment()} /> */}
            </View>
            <View>
              <Ionicons name="md-arrow-forward" size={35} color="#74E15C" />
            </View>
            <View style={{ borderColor: "#118CF4", borderBottomWidth: 2 }}>
              <Bold style={{ fontSize: 25, color: "#fff" }}>
                {moment(dates.endDate || context.filters.endDate).format(
                  "DD MMM YYYY"
                )}
              </Bold>
              {/* <DatePicker initialDate={moment()} /> */}
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#50646B",
              flexGrow: 1,
            }}
          >
            <Image
              style={{
                height: "100%",
                width: "100%",
                flex: 1,
                resizeMode: "cover",
              }}
              source={{
                uri:
                  "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v868-mynt-07_1.jpg?w=1000&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e0608337e1439319f8b67bc4efd7efb4",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
export default DatePickerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingTop: 50,
    // borderWidth: 1,
    // borderColor: "black",
    backgroundColor: "#50646B",
  },
  back: {
    borderColor: "white",
    borderWidth: 0,
    paddingVertical: 20,
    paddingHorizontal: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
