import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { Icon, Card, Button } from "react-native-elements";
import { CHORES } from "../shared/chores";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteBehavior,
  addBehavior,
  editBehavior,
} from "../redux/ActionCreators";

export default function ParentBehavior() {
  // const [chores, setBehaviors] = useState(CHORES);
  const behaviors = useSelector((state) => state.behaviors);
  console.log(behaviors, behaviors.length);
  const dispatch = useDispatch();

  const addchore = () => {
    // setBehaviors(CHORES);
    dispatch(editBehavior());
  };

  const deletechore = (id) => {
    // setBehaviors(behaviors.filter((chore) => chore.id != id));
    dispatch(deleteBehavior(id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={behaviors}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Button
              icon={
                <Icon
                  name="pencil"
                  type="font-awesome"
                  color="white"
                  size={14}
                />
              }
              buttonStyle={styles.choreButton}
              onPress={() => dispatch(editBehavior())}
            />
            <Button
              icon={
                <Icon
                  name="trash"
                  type="font-awesome"
                  color="white"
                  size={14}
                />
              }
              buttonStyle={styles.choreButton}
              onPress={() => dispatch(deleteBehavior(item.id))}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title=" Add Behavior"
        icon={<Icon name="plus" type="font-awesome" size={15} color="white" />}
        onPress={() => {
          const now = new Date();
          dispatch(
            addBehavior({
              id: now,
              name: `Behavior: ${now.toLocaleString("en-GB", {
                timeZone: "UTC",
              })}`,
            })
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  list: { marginBottom: 10 },
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
  choreButton: {
    padding: 10,
    alignSelf: "flex-end",
    margin: 1,
  },
});
