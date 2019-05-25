import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Tweet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.author}</Text>
        <Text>{this.props.text}</Text>
        <Text>♡{this.props.fav}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: 10,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    margin: 10,
    width: "90%"
  }
});
