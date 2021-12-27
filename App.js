import React from "react";
import { View } from "react-native";
import InputField from "./components/InputField";
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [petName, setPetName] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [breed, setBreed] = useState(null);
  const [favoriteToy, setFavoriteToy] = useState(null);

  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#ecf0f1" }}
    >
      <InputField
        label="Email"
        placeholder="type email"
        value={email}
        onChangeText={setEmail}
        secureTextEntry={false}
      />
      <InputField
        label="Password"
        placeholder="type password here"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <InputField
        label="Confirm Password"
        placeholder="type password here"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <InputField
        label="Pet's Name"
        placeholder="pets name here"
        value={petName}
        onChangeText={setPetName}
        secureTextEntry={false}
      />
      <InputField
        label="Pet's Date of birth"
        placeholder="pets birthdate here"
        value={birthdate}
        onChangeText={setBirthdate}
        secureTextEntry={false}
      />
      <InputField
        label="breed"
        placeholder="pets breed here"
        value={breed}
        onChangeText={setBreed}
        secureTextEntry={false}
      />
      <InputField
        label="Favorite toy"
        placeholder="pets toy here"
        value={favoriteToy}
        onChangeText={setFavoriteToy}
        secureTextEntry={false}
      />
    </View>
  );
};
export default App;
