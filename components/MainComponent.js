import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon, Header } from "react-native-elements";

import Tab from "./TabComponent";
import ChildChores from './ChildChoresComponent'

const ParentNavigator = createMaterialTopTabNavigator({
  ChoreList: { screen: Tab },
  BehaviorList: { screen: Tab },
  Configuration: { screen: Tab },
});

const ChildNavigator = createMaterialTopTabNavigator({
  Chores: { screen: ChildChores },
  Behaviors: { screen: Tab },
  Redeem: { screen: Tab },
});

const MainNavigator = createMaterialBottomTabNavigator(
  {
    Child: {
      screen: ChildNavigator,
      navigationOptions: {
        tabBarLabel: "Child",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="child" type="font-awesome" size={20} color={tintColor} />
        ),
      },
    },
    Parent: {
      screen: ParentNavigator,
      navigationOptions: {
        tabBarLabel: "Parents",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: "Child",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" },
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "GOOD KID!", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  drawerHeader: {
    backgroundColor: "#5637DD",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default Main;
