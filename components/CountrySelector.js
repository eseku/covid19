import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Bold } from "~/components/StyledText";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { AppContext } from "~/context/Context";

const Selector = () => {
  const [showModal, setShowModal] = useState(false);
  const context = useContext(AppContext);

  return (
    <TouchableOpacity
      onPress={() => {
        setShowModal(!showModal);
      }}
    >
      <View style={styles.countryDisplayView}>
        <View>
          <Bold style={styles.countryTextStyle}>{context["country"]}</Bold>
        </View>
        <View>
          <Bold>
            <AntDesign name={"caretdown"} color={"#C3C8DC"} />
          </Bold>
        </View>
      </View>
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(!showModal)}
        onSwipeComplete={() => setShowModal(!showModal)}
        style={{
          margin: 0,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            marginTop: 50,
            paddingHorizontal: 20,
            backgroundColor: "white",
            height: Dimensions.get("window").height / 1.1,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }}
        >
          <Bold>I am the modal content!</Bold>
          <TouchableOpacity
            onClick={() => {
              setShowModal(false);
            }}
            style={{ borderWidth: 2, borderColor: "tomato" }}
          >
            <Bold>Close</Bold>
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default Selector;

const styles = StyleSheet.create({
  countryDisplayView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  countryTextStyle: {
    fontSize: 50,
  },
});
