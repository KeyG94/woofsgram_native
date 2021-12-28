import React from "react";
import { ScrollView } from "react-native";
import InputField from "./components/InputField";
import { Formik } from "formik";

const App = () => {
  const onSubmit = (values) => {
    if (values.controlPassword !== values.password) {
      alert("password does not match");
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        controlPassword: "",
        petName: "",
        petBirth: "",
        petBreed: "",
        petFavToy: "",
      }}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <InputField
            label="Email"
            placeholder="type email"
            value={values.email}
            onChangeText={handleChange("email")}
            secureTextEntry={false}
          />
          <InputField
            label="Password"
            placeholder="type password here"
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry
          />
          <InputField
            label="Confirm Password"
            placeholder="type password here"
            value={values.controlPassword}
            onChangeText={handleChange("controlPassword")}
            secureTextEntry
            onSubmitEditing={handleSubmit}
          />
          <InputField
            label="Pet's Name"
            placeholder="pets name here"
            value={values.petName}
            onChangeText={handleChange("petName")}
            secureTextEntry={false}
          />
          <InputField
            label="Pet's Date of birth"
            placeholder="pets birthdate here"
            value={values.birthdate}
            onChangeText={handleChange("petBirth")}
            secureTextEntry={false}
          />
          <InputField
            label="breed"
            placeholder="pets breed here"
            value={values.breed}
            onChangeText={handleChange("petBreed")}
            secureTextEntry={false}
          />
          <InputField
            label="Favorite toy"
            placeholder="pets toy here"
            value={values.favPetToy}
            onChangeText={handleChange("favPetToy")}
            secureTextEntry={false}
          />
        </ScrollView>
      )}
    </Formik>
  );
};
export default App;
