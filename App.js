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
      width: 1632,
      height: 1165,
      cropping: true,
    }).then((image) => {
      uploadImage(image);
    });
  };

  const uploadImage = async (image) => {
    try{
      console.log("Entered Upload Image file ");
      const data = new FormData();
      let arr=String(image.path).split('/');
      console.log("arr = ",arr);
      let filename=arr[arr.length-1];
      data.append("file", {
        name: filename,
        type: image.mime,
        uri:image.path
      });

      console.log("data: ",data);
      let url="http://192.168.119.11:3002/upload_file";//
      let res = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        }
      });
    let responseJson = await res.json();
    console.log(responseJson);
    if (responseJson.status) {
      console.log(responseJson.message);
    }else{
      console.log(responseJson.message)
    }
    }catch(err){
      console.log(err);
    }
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
