import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({ text, onPress, disabled }) {
  return (
    //Touchable opacity is another form for button on mobile
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        alignItems: "center",
        width: 200,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "teal",
    width: "100%",
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: 1,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
