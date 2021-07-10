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
import { deleteChore, addChore, editChore } from "../redux/ActionCreators";

export default function EditChores() {
  // const [chores, setChores] = useState(CHORES);
  const chores = useSelector((state) => state.chores);
  console.log(chores, chores.length);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [newChore, setNewChore] = useState({
    name: "",
    completed: null,
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const resetForm = () => {
    setNewChore({ name: "", completed: null });
  };

  const submitForm = () => {
    const now = new Date();
    dispatch(addChore({ ...newChore, id: now, completed: null }));
    toggleModal();
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
              buttonStyle={styles.itemButton}
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
              buttonStyle={styles.itemButton}
              onPress={() => dispatch(deleteChore(item.id))}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title=" Add Chore"
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
            placeholder="New Chore"
            leftIcon={{ type: "font-awesome", name: "check-square" }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            onChangeText={(chore) => setNewChore({ name: chore })}
            value={newChore.name}
          ></Input>
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
