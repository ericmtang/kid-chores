import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { CHORES } from "../shared/chores";
import { useSelector, useDispatch } from "react-redux";

export default function ChildChores() {
  // const [chores, setChores] = useState(CHORES);
  const chores = useSelector((state) => state.chores);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={chores}
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
