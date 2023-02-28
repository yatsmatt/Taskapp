import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Goalitem from "./components/Goalitem";
import Goalinput from "./components/Goalinput";

export default function App() {
  const [modeisvis, setmodeisvis] = useState(false);
  const [listofgoals, setlistofgoals] = useState([]);
  const [keynum, setkeynum] = useState(0);

  function startaddgole() {
    setmodeisvis(true);
  }

  function endaddgole() {
    setmodeisvis(false);
  }

  function addGoalInputHandler(entergoaltext) {
    setlistofgoals((currentCoursGoals) => [
      ...currentCoursGoals,
      { text: entergoaltext, key: keynum.toString() },
    ]);
    setkeynum(keynum + 1);
    endaddgole();
  }

  function deleteGoalHandler(key) {
    const newList = listofgoals.filter((goal) => goal.key !== key);
    setlistofgoals(newList);
  }

  return (
    <>
      <StatusBar style="ligth" />
      <View style={styles.appCont}>
        <Button title="add new goal" color="#5e0acc" onPress={startaddgole} />
        <Goalinput
          visible={modeisvis}
          onAddGoal={addGoalInputHandler}
          endaddgole={endaddgole}
        />
        <View style={styles.goalsCont}>
          <FlatList
            data={listofgoals}
            renderItem={(item) => {
              return (
                <Goalitem
                  text={item.item.text}
                  id={item.item.key}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appCont: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsCont: {
    flex: 5,
  },
});
