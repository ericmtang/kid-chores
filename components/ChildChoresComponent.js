import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";

export default function ChildChores() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "Brush Teeth" },
          { key: "Get Dressed" },
          { key: "Eat Breakfast" },
        ]}
        renderItem={({ item }) => (
          <Card style={styles.item}>
            <Text>{item.key}</Text>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
