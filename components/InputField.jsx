import React from "react";
import { View, Text, TextInput } from "react-native";

export default function InputField(props) {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
  } = props;
  return (
    <View>
      <Text>{label}: </Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
