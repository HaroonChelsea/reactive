import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PanGesture from "./PanGesture";
import Main from "./Main";

export type MainStackParamList = {
  Main: undefined;
  PanGesture: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNav = () => (
  <MainStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Main"
  >
    <MainStack.Screen name="Main" component={Main} />
    <MainStack.Screen name="PanGesture" component={PanGesture} />
  </MainStack.Navigator>
);

export default MainNav;
