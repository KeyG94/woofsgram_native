import React from "react";
import { ScrollView, Button, Text } from "react-native";
import InputField from "./components/InputField";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "./components/Button";

//yup imported from yup using npm install yup
const reviewSchema = yup.object({
  //object keys to refer for validation
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required"),
  controlPassword: yup
    .string()
    .required("Confirmation password is required")
    //this method checks password if it is equal to this object password by referencing to "password"
    .when("password", (password, schema) => {
      if (password) return schema.required("Confirm Password is required");
    })
    .oneOf([yup.ref("password"), "must match with password"]),
});

const App = () => {
  return (
    //imported from Formik using npm install formik
    <Formik
      //initial values that is used instead of state. Formik handles state, yup uses these references for validation
      initialValues={{
        email: "",
        password: "",
        controlPassword: "",
      }}
      //validation schema is run, if return is true it will handle onSubmit
      validationSchema={reviewSchema}
      //this is ran if validation is successful
      onSubmit={(values, { setSubmitting }) => {
        //this function takes in Formik childrens values.
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
        handleBlur,
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
          {/* Input field for email  */}
          <InputField
            label="Email"
            placeholder="type email"
            value={values.email}
            onChangeText={handleChange("email")}
            //secureTextEntry usually is false by default, not sure why it doesnt work here?
            secureTextEntry={false}
            onBlur={handleBlur("email")}
            accessible={true}
            accessibilityLabel="Press to enter email"
            accessibilityHint="input box for your email info"
          />

          {/*Touched checks if this component has been touched */}
          <Text style={{ color: "red", padding: 6 }}>
            {touched.email && errors.email}
          </Text>

          {/* Input field for password */}
          <InputField
            label="Password"
            placeholder="type password here"
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry
            onBlur={handleBlur("password")}
            accessible={true}
            accessibilityLabel="Press to input your password"
            accessibilityHint="your password will be submitted"
          />

          <Text style={{ color: "red", padding: 6 }}>
            {touched.password && errors.password}
          </Text>

          {/* Input field for control password */}
          <InputField
            label="Confirm Password"
            placeholder="type password here"
            value={values.controlPassword}
            onChangeText={handleChange("controlPassword")}
            secureTextEntry
            //An extra property key to handle if user press return, this usually is handled by yup by default
            //Might remove later
            onSubmitEditing={handleSubmit}
            onBlur={handleBlur("controlPassword")}
            accessible={true}
            accessibilityLabel="Press to enter a confirmation password"
            accessibilityHint="your confirmation password will be checked against your password"
          />

          <Text style={{ color: "red", padding: 6 }}>
            {touched.controlPassword && errors.controlPassword}
          </Text>
          <FlatButton
            text="Submit"
            onPress={handleSubmit}
            disabled={isSubmitting}
          ></FlatButton>
        </ScrollView>
      )}
    </Formik>
  );
};
export default App;
