import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
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
          <Bold style={styles.countryTextStyle}>
            {context.country?.Country}
          </Bold>
        </View>
        <View style={{ paddingHorizontal: 10 }}>

          <AntDesign name={"caretdown"} color={"#C3C8DC"} />

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
            height: Dimensions.get("window").height / 1.3,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            paddingTop: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Bold style={{ fontSize: 30 }}>Select Country </Bold>
            <Bold style={{ fontSize: 30 }}>🌍 </Bold>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 20,
            }}
          >
            {context.summary.Countries &&
              context.summary.Countries.map((el, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      context.setIndividualCountry(el.Country);
                      setShowModal(false);
                    }}
                    style={{
                      borderColor: "#C6C9DC",
                      borderBottomWidth: 0.5,
                      paddingVertical: 20,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontSize: 18 }}>{el.Country} </Text>
                    <Bold style={{ fontSize: 18 }}>
                      {cCodeToEmoji(el.CountryCode)}
                    </Bold>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

function cCodeToEmoji(cCode) {
  return cCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

export default Selector;

const styles = StyleSheet.create({
  countryDisplayView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",

  },
  countryTextStyle: {
    fontSize: 50,
    color: "#212B46",

  },
});
