import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Result</Text>
      <View>
        <View style={styles.resultItem}>
          <Text style={styles.resultItemName}>Number of Questions:</Text>
          <Text style={styles.resultItemValue}>100</Text>
        </View>
        <View style={styles.resultItem}>
          <Text style={styles.resultItemName}>Total Attempted:</Text>
          <Text style={styles.resultItemValue}>70</Text>
        </View>
        <View style={styles.resultItem}>
          <Text style={styles.resultItemName}>Correct Answered:</Text>
          <Text style={styles.resultItemValue}>40</Text>
        </View>
        <View style={styles.resultItem}>
          <Text style={styles.resultItemName}>Final Score:</Text>
          <Text style={styles.resultItemValue}>25</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },
  resultItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 12,
  },
  resultItemName: {
    marginRight: 30,
    fontSize: 18,
    fontWeight: "500",
  },
  resultItemValue: {
    fontSize: 18,
    fontWeight: "500",
  }
});

export default ResultView;
