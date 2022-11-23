import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PanGesture from "./PanGesture";
import App from "../App";

export type MainStackParamList = {
  App: undefined;
  PanGesture: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Main = () => (
  <MainStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="App"
  >
    <MainStack.Screen name="App" component={App} />
    <MainStack.Screen name="PanGesture" component={PanGesture} />
  </MainStack.Navigator>
);

export default Main;
