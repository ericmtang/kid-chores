import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { REWARDS } from "../shared/rewards";
import { useSelector, useDispatch } from "react-redux";

export default function ChildRewards() {
  const rewards = useSelector((state) => state.rewards);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={rewards}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 22,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 10,
    margin: 5,
    fontSize: 20,
    height: 44,
    borderRadius: 10,
  },
});
