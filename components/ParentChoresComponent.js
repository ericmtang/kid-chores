import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { Icon, Card, Button } from "react-native-elements";
import { CHORES } from "../shared/chores";
import { useSelector, useDispatch } from "react-redux";
import { deleteChore, addChore, editChore } from "../redux/ActionCreators";

export default function ParentChores() {
  // const [chores, setChores] = useState(CHORES);
  const chores = useSelector((state) => state.chores);
  console.log(chores, chores.length);
  const dispatch = useDispatch();

  const addchore = () => {
    // setChores(CHORES);
    dispatch(editChore());
  };

  const deletechore = (id) => {
    // setChores(chores.filter((chore) => chore.id != id));
    dispatch(deleteChore(id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={chores}
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
              onPress={() => dispatch(editChore())}
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
              onPress={() => dispatch(deleteChore(item.id))}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title=" Add Chore"
        icon={<Icon name="plus" type="font-awesome" size={15} color="white" />}
        onPress={() => {
          const now = new Date();
          dispatch(
            addChore({
              id: now,
              name: `Chore: ${now.toLocaleString("en-GB", {
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
