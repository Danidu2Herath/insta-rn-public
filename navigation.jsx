import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BottomTabs from "./src/components/BottomTabs";

import CommentScreen from "./src/screens/CommentScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LikeListScreen from "./src/screens/LikeListScreen";
import LoginScreen from "./src/screens/LoginScreen";
import NewPostScreen from "./src/screens/NewPostScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import DiscoveryScreen from "./src/screens/DiscoveryScreen";
import ReelsScreen from "./src/screens/ReelsScreen";
import SignupScreen from "./src/screens/SignupScreen";

const Stack = createStackNavigator();

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CommentScreen" component={CommentScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="DiscoveryScreen" component={DiscoveryScreen} />
      <Stack.Screen name="ReelsScreen" component={ReelsScreen} />
      <Stack.Screen name="LikeListScreen" component={LikeListScreen} />
    </Stack.Navigator>
    <BottomTabs />
  </NavigationContainer>
);

const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export { SignedInStack, SignedOutStack };
