import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";
import DateRecal from "../ui/DateRecal";

function SingleLog({id, date, temperature, humidity,water,onPress}) {
  function pressHandler() {
    onPress({date, temperature, humidity, water, id});
  }
  const dateFull = new String(date);
  return (
    <View>
      <Pressable style={styles.containerLog}
        onPress={pressHandler}
        android_ripple={{ color: Colors.primary600 }}
      >
        <View style={styles.containerDate}>
          <DateRecal dateFull={dateFull} />
          {/* <Text>{props.date}</Text> */}
        </View>
        <View style={styles.containerData}>
          <View>
            <Text style={styles.textField}>Temp: </Text>
            <Text style={styles.textField}>{temperature}°C</Text>
          </View>
          <View>
            <Text style={styles.textField}>Hum: </Text>
            <Text style={styles.textField}>{humidity}%</Text>
          </View>
          <View>
            <Text style={styles.textField}>Water: </Text>
            <Text style={styles.textField}>{water}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default SingleLog;

const styles = StyleSheet.create({
  containerLog: {
    margin: 4,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary600,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
  },
  containerDate: {
    flex: 2,
    paddingHorizontal: 5,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary700,
    backgroundColor: Colors.primary600,
  },
  containerData: {
    padding: 10,
    flex: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textField: {
    flex: 1,
    color: "#fff",
    marginHorizontal: 5,
    textAlign: "center",
  },
});
