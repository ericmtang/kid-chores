import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
} from "react-native";
import { Icon, Card, Button, Input } from "react-native-elements";
import { CHORES } from "../shared/chores";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteBehavior,
  addBehavior,
  editBehavior,
} from "../redux/ActionCreators";

export default function EditBehavior() {
  const behaviors = useSelector((state) => state.behaviors);
  console.log(behaviors, behaviors.length);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [newBehavior, setNewBehavior] = useState({
    id: "",
    name: "",
    points: 0,
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const resetForm = () => {
    setNewBehavior({ id: "", name: "", points: 0 });
  };

  const submitForm = () => {
    console.log("submitForm: ", newBehavior);
    if (newBehavior.id === "") {
      const now = new Date();
      dispatch(
        addBehavior({
          ...newBehavior,
          id: now,
          points: Number(newBehavior.points),
        })
      );
      toggleModal();
    } else {
      dispatch(
        editBehavior({
          ...newBehavior,
          points: Number(newBehavior.points),
        })
      );
      toggleModal();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={behaviors}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.name} ({item.points})
            </Text>
            <Button
              icon={
                <Icon
                  name="pencil"
                  type="font-awesome"
                  color="white"
                  size={14}
                />
              }
              buttonStyle={styles.itemButton}
              onPress={() => {
                setNewBehavior(item);
                toggleModal();
              }}
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
              buttonStyle={styles.itemButton}
              onPress={() => dispatch(deleteBehavior(item.id))}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title=" Add Behavior"
        icon={<Icon name="plus" type="font-awesome" size={15} color="white" />}
        onPress={() => toggleModal()}
      />
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modal}
        onRequestClose={() => toggleModal()}
      >
        <View style={styles.modal}>
          <Input
            placeholder="New Behavior"
            leftIcon={{ type: "font-awesome", name: "thumbs-up" }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            onChangeText={(chore) =>
              setNewBehavior({ ...newBehavior, name: chore })
            }
            value={newBehavior.name}
          />
          <Input
            placeholder="Point Value"
            keyboardType="numeric"
            leftIcon={{ type: "font-awesome", name: "line-chart" }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            onChangeText={(points) =>
              setNewBehavior({ ...newBehavior, points: points })
            }
            value={newBehavior.points.toString()}
          />
          <View style={{ margin: 10 }}>
            <Button
              onPress={() => {
                submitForm();
                resetForm();
              }}
              color="#5637DD"
              title="Submit"
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button
              onPress={() => toggleModal()}
              color="#808080"
              title="Cancel"
            />
          </View>
        </View>
      </Modal>
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
  itemButton: {
    padding: 10,
    alignSelf: "flex-end",
    margin: 1,
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
});
