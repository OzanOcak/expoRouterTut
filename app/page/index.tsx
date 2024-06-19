import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>hello world!</Text>
      <Link href="/page/register" asChild>
        <Text>Button to Register</Text>
      </Link>
      <Link href="/page/one" asChild>
        <Text>Tab one</Text>
      </Link>
    </View>
  );
}
