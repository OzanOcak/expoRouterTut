import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

const PostsLayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="[id]" options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
};

export default PostsLayout;
