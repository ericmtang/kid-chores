import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { BEHAVIORS } from "../shared/behaviors";
import { useSelector, useDispatch } from "react-redux";
import { addPoints, addBehaviorQ } from "../redux/ActionCreators"

export default function BehaviorChooser() {
    const behaviors = useSelector((state) => state.behaviors);
    const behaviorQ = useSelector((state) => state.behaviorQueue);
    const dispatch = useDispatch();

  return (
    <View style={styles.container}>
    <FlatList
      data={behaviors}
      extraData={behaviors}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            const now = new Date();
            dispatch(addBehaviorQ({ ...item, id: now, approval: null }));
            /* dispatch(addPoints(item.points));
                dispatch(addBehaviorQ({...item, id: now, fulfilled: now.toLocaleString("en-US", { hour12: true })}));*/
          }}
        >
          <View style={styles.itemText}>
            <Text>{item.name}</Text>
          </View>
          <View style={styles.itemPoints}>
            <Text
              style={{
                textAlign: "right",
                color: item.points < 0 ? "red" : "green",
              }}
            >
              {item.points}
            </Text>
          </View>
        </TouchableOpacity>
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
      alignItems: "center",
    },
    itemText: {
      flex: 1,
      flexBasis: 140,
      flexGrow: 1,
    },
    itemPoints: {
      flex: 1,
      flexBasis: 30,
      flexShrink: 1,
    },
    itemButton: {
      flex: 1,
      flexBasis: 25,
      padding: 10,
      alignSelf: "flex-end",
      margin: 1,
      backgroundColor: "white",
      borderColor: "black",
      borderWidth: 1,
    },
    header: {
      backgroundColor: "#F5FCFF",
      padding: 10,
    },
    content: {
      padding: 20,
      backgroundColor: "#fff",
    },
    headerText: {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "500",
    },
});
