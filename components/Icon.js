import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Icon = (props) => {
  return (
    <View
      style={{
        padding: 8,
        borderWidth: 0.5,
        borderRadius: 15,
        alignItems: "center",
        borderColor: props.color,
        justifyContent: "center",
        backgroundColor:
          props.name === "plus"
            ? "rgba(255, 196, 140, 0.05)"
            : props.name === "heart"
            ? "rgba(24, 165, 113, 0.05)"
            : "rgba(220, 57, 78, 0.05)",
      }}
    >
      <AntDesign
        name={props.name}
        color={props.color}
        size={10}
        style={{ alignSelf: "center" }}
      />
    </View>
  );
};

export default Icon;
