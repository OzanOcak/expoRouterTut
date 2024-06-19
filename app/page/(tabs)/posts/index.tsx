import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const post = () => {
  return (
    <View>
      <Text>post</Text>
      <Link href="/page/posts/1">post 1</Link>
      <Link href="/page/posts/2">post 2</Link>
      <Link href="/page/posts/3">post 3</Link>
    </View>
  );
};

export default post;
