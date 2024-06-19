import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const PostsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Languages" }}
      ></Stack.Screen>
      <Stack.Screen name="page" options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
};

export default PostsLayout;
