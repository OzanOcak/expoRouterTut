import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Register() {
  return (
    <View>
      <Text>register</Text>
      <Link href="/page/login" asChild>
        <Text>Button to Login</Text>
      </Link>
    </View>
  );
}
