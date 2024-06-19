import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, Stack, useRouter } from "expo-router";
export default function Homelayout() {
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
        options={{
          title: "Category",
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <Text style={{ color: "white" }}>back </Text>
            </Pressable>
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="register/index"
        options={{
          title: "Register",
          headerRight: () => (
            <Pressable
              onPress={() => {
                router.push("/page/login");
              }}
            >
              <Text style={{ color: "white" }}>Login</Text>
            </Pressable>
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="login"
        options={{ title: "Login", presentation: "modal" }}
      ></Stack.Screen>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
