import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, CheckBox } from "react-native-elements";
import { CHORES } from "../shared/chores";
import { useSelector, useDispatch } from "react-redux";
import { completeChore } from "../redux/ActionCreators";
import ListItemSwipeable from "react-native-elements/dist/list/ListItemSwipeable";

export default function ParentChores() {
  // const [chores, setChores] = useState(CHORES);
  const chores = useSelector((state) => state.chores);
  console.log(
    "ParentChoresSort: ",
    [...chores].sort(function (a, b) {
      return (
        (b.completed == null) - (a.completed == null) || -(a > b) || +(a < b)
      );
    })
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={[...chores].sort(function (a, b) {
          return (
            (b.completed == null) - (a.completed == null) ||
            -(a > b) ||
            +(a < b)
          );
        })}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            {item.completed != null && (
              <Text style={styles.itemText}>Done: {item.completed}</Text>
            )}
            <CheckBox
              checked={item.completed !== null}
              onPress={() => dispatch(completeChore(item.id))}
            />
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
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 10,
    margin: 5,
    fontSize: 20,
    borderRadius: 5,
  },
  itemText: {
    flex: 1,
    textAlign: "auto",
    alignSelf: "center",
  },
  itemCheckBox: {
    alignSelf: "flex-end",
  },
});
