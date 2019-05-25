import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tweet from "./components/Tweet";

export default class App extends React.Component {
  state = {
    tweets: [
      {
        author: "@taro",
        text: "hello",
        fav: 10
      },
      {
        author: "@ken",
        text: "hi",
        fav: 5
      }
    ]
  };
  render() {
    const tweetItems = this.state.tweets.map((tweet, index) => (
      <Tweet
        author={tweet.author}
        text={tweet.text}
        fav={tweet.fav}
        key={index}
      />
    ));
    return <View style={styles.container}>{tweetItems}</View>;
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
