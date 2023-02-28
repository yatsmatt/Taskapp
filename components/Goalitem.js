import { StyleSheet, Text, View, Pressable } from "react-native";

function Goalitem(props) {
  function show() {
    props.onDeleteItem(props.id);
  }
  return (
    <View style={styles.goalithem}>
      <Pressable
        onPress={show}
        android_ripple={{ color: "#FF00FF" }}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goaltext}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default Goalitem;

const styles = StyleSheet.create({
  goalithem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goaltext: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
