import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
  Platform,
} from "react-native";
import { useState } from "react";

function Goalinput(props) {
  const [entergoaltext, setentergoaltext] = useState("");

  function goalInputHandler(enterText) {
    setentergoaltext(enterText);
  }
  function addGoalInputHandler() {
    props.onAddGoal(entergoaltext);
    setentergoaltext("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputCont}>
        <Image
          style={styles.img}
          source={{
            uri: "https://raw.githubusercontent.com/academind/react-native-practical-guide-code/02-basics/extra-files/goal.png",
          }}
        />
        <TextInput
          style={styles.textinCont}
          placeholder="You place goal!"
          onChangeText={goalInputHandler}
          value={entergoaltext}
        />
        <View style={styles.buttonCon}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.endaddgole} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalInputHandler}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Goalinput;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputCont: {
    backgroundColor: "#311b6b",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textinCont: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccccc",
    width: "100%",
    padding: 16,
    backgroundColor: "white",
  },
  buttonCon: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  dateTime: {
    width: 100,
    marginHorizontal: 8,
    backgroundColor: "white",
  },
});
