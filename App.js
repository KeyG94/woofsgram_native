import React from "react";
import { ScrollView, Button, Text } from "react-native";
import InputField from "./components/InputField";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required"),
  controlPassword: yup
    .string()
    .required("Confirmation password is required")
    .when("password", (password, schema) => {
      if (password) return schema.required("Confirm Password is required");
    })
    .oneOf([yup.ref("password"), "must match with password"]),
});

const App = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        controlPassword: "",
      }}
      validationSchema={reviewSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
      }) => (
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
          <Text style={{ color: "red", padding: 6 }}>
            {touched.email && errors.email}
          </Text>
          <InputField
            label="Password"
            placeholder="type password here"
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry
          />
          <Text style={{ color: "red", padding: 6 }}>
            {touched.password && errors.password}
          </Text>
          <InputField
            label="Confirm Password"
            placeholder="type password here"
            value={values.controlPassword}
            onChangeText={handleChange("controlPassword")}
            secureTextEntry
            onSubmitEditing={handleSubmit}
          />
          <Text style={{ color: "red", padding: 6 }}>
            {touched.controlPassword && errors.controlPassword}
          </Text>
          <Button title="submit" onPress={handleSubmit} disabled={isSubmitting}>
            Submit
          </Button>
        </ScrollView>
      )}
    </Formik>
  );
};
export default App;
