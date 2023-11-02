import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import RootStackParamList from "../utils/RootStackParamList";
import { registerSensor } from "react-native-reanimated/lib/typescript/reanimated2/core";
import ActionButton from "../components/buttons/ActionButton";
import OutlinedButton from "../components/buttons/OutlinedButton";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from "./AccountScreen";
import CalendarScreen from "./CalendarScreen";
import TodayScreen from "./TodayScreen";

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
export default MainTabs;

