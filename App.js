import React from "react";
import { StyleSheet, View, Button } from "react-native";
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

  onPress = () => {
    const tweet = {
      author: "@yumi",
      text: "Wow!",
      fav: 0
    };
    //this.setState({ tweets: this.state.tweets.concat(tweet) });
    this.setState({ tweets: [...this.state.tweets, tweet] });
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
    return (
      <View style={styles.container}>
        {tweetItems}
        <Button title="つぶやく" onPress={this.onPress} />
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
