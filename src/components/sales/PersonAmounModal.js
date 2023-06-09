import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Pressable } from "react-native";
import { Divider, Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Container,
  Body,
  Footer,
  Header,
  // Input,
  Item,
  Left,
  Text,
  Title,
  Right,
  View,
  Button,
  Toast,
  Label,
  Form,
  Picker,
  Icon,
  Thumbnail,
} from "native-base";
import { Formik } from "formik";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import InputSpinner from "react-native-input-spinner";

const PersonAmounModal = ({ showModal, handleClose, onSubmit }) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <KeyboardAwareScrollView>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalHeaderText}>Person Amount</Text>
              <Divider
                style={{
                  backgroundColor: "black",
                  width: 200,
                  marginBottom: 10,
                }}
              />

              <Formik
                initialValues={{
                  personAmount: 1,
                }}
                enableReinitialize
                onSubmit={(values) => {
                  onSubmit(values);
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  values,
                  errors,
                  touched,
                }) => (
                  <Form>
                    <View
                      style={{
                        padding: 10,
                      }}
                    >
                      <InputSpinner
                        max={20}
                        min={1}
                        step={1}
                        colorMax={"#f04048"}
                        colorMin={"#40c5f4"}
                        value={values.personAmount}
                        onChange={(num) => {
                          setFieldValue("personAmount", num);
                        }}
                      />
                    </View>
                    <View>
                      <Divider
                        style={{
                          backgroundColor: "black",
                          marginBottom: 10,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={handleSubmit}
                      >
                        <Text style={styles.textStyle}>OK</Text>
                      </Pressable>
                      <Divider
                        style={{
                          backgroundColor: "grey",
                          width: 1,
                        }}
                      />
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={handleClose}
                      >
                        <Text style={styles.textStyle}>Cancel</Text>
                      </Pressable>
                    </View>
                  </Form>
                )}
              </Formik>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
  },
  inputLogin: {
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    borderColor: "#a4a4a4",
    color: "#a4a4a4",
    width: "100%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    // backgroundColor: "#2196F3",
  },
  textStyle: {
    // color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
  },
  modalHeaderText: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default PersonAmounModal;
