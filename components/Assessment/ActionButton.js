import React from "react";
import { Bold } from "~/components/StyledText";
import { TouchableOpacity, StyleSheet } from "react-native";

export default (props) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        props.onPress();
      }}
    >
      <Bold
        style={{
          color: "#f4f6fa",
          fontSize: 20,
          borderWidth: 0,
          borderColor: "white",
          paddingBottom: 0,
          paddingTop: 8,
          alignSelf: "center",
        }}
      >
        {props.actionName}
      </Bold>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    backgroundColor: "#212B46",
    paddingHorizontal: 50,
    paddingVertical: 8,
  },
});
