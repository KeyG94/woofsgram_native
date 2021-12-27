import React from "react";
import { View, Text, TextInput } from "react-native";

export default function InputField(props) {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    onSubmitEditing,
  } = props;
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ padding: 8 }}>{label}: </Text>
      <TextInput
        style={{ padding: 8, fontSize: 18 }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
}
