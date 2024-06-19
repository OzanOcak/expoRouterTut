import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Text>Page</Text>
      <Link href="/page" asChild>
        <Text>click</Text>
      </Link>
    </View>
  );
};

export default Page;
