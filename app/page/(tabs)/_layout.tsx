import { Stack, Tabs, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

export default function TabsLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerTintColor: "white",
        headerPressColor: "gray",
      }}
    >
      <Tabs.Screen
        name="one"
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTitle: "ONE",
          tabBarLabel: "one",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Text style={{ color: "white" }}>back</Text>
            </Pressable>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="two"
        options={{
          headerTitle: "TWO",
          tabBarLabel: "two",
          headerStyle: { backgroundColor: "black" },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="posts"
        options={{
          headerTitle: "Posts",
          tabBarLabel: "post",
          headerStyle: { backgroundColor: "black" },
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
