import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tweet from "./components/Tweet";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tweet author="@taro" text="hello" fav={10} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
