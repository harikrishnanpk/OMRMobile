/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import axios from "axios";

// import { RNCamera } from "react-native-camera";
import ImagePicker from "react-native-image-crop-picker";
import ResultView from "./ResultView";

const App = () => {
  const [showResult, setResult] = useState(null);

  const takePicture = function () {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      uploadImage(image);
    });
  };

  const uploadImage = async (image) => {
    const response = await fetch(image.path);
    const blob = await response.blob();

    const data = new FormData();
    data.append("file", blob);

    const uploadData = await fetch("http://192.168.119.11:3001/upload_file", {
      method: "post",
      body: data,
      headers: {
        "Content-Type": "multipart/form-data; ",
      },
    });
    console.log("uploadData" + JSON.stringify(uploadData));
  };

  return (
    <View style={styles.container}>
      {!showResult ? (
        <View style={styles.snapContainer}>
          <View
            style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
          >
            <TouchableOpacity
              onPress={() => takePicture()}
              style={styles.capture}
            >
              <Text style={{ fontSize: 14, color: "white" }}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <ResultView />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  snapContainer: {
    justifyContent: "center",
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  capture: {
    flex: 0,
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
});

export default App;
