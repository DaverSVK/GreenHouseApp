import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../../constants/Colors";
import DateRecal from "../ui/DateRecal";

function SingleLogFullSize({onCancel, date, temperature, humidity,water}) {
  const dateFull = new String(date);
  function cancelHandler() {
    onCancel(null);
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerDate}>
      <DateRecal dateFull={dateFull} style={styles.dateUpdate} style2={styles.dateUpdateText}/>
      </View>
      <View style={styles.containerMeasures}>
        <View style={styles.containerTemperature}>
          <Text style={styles.basicText}>Temp: {temperature}°C</Text>
        </View>
        <View style={styles.containerHumidity}>
          <Text style={styles.basicText}>Hum: {humidity}%</Text>
        </View>
        <View style={styles.containerWater}>
          <Text style={styles.basicTextWater}>Water1: {water}</Text>
          <Text style={styles.basicTextWater}>Water2: {water}</Text>
        </View>
        <View style={styles.containerWater}>
          <Text style={styles.basicTextWater}>Water3: {water}</Text>
          <Text style={styles.basicTextWater}>Water4: {water}</Text>
        </View>
        <View style={styles.containerButton}>
        <Button
              title="Cancel"
              color={Colors.buttonCancel}
              onPress={cancelHandler}
              />
              </View>
      </View>
    </View>
  );
}
export default SingleLogFullSize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 5,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: Colors.border500,
    backgroundColor: Colors.primary500,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  containerDate: {
    marginTop: 25,
    flex: 1,
    padding: 5,
    backgroundColor: Colors.primary600,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  containerMeasures: {
    flex: 8,
  },
  containerTemperature: {
    marginVertical: 15,
    flex: 1,
  },
  containerHumidity: {
    flex: 1,
  },
  containerWater: {
    flex: 1,
    flexDirection: 'row',
  },
  containerButton: {
    borderRadius: 50,
    margin: 15,
  },
  basicText: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 20,
  },
  basicTextWater: {
    color: '#fff',
    fontSize: 15,
    marginHorizontal: 20,
  },
  dateUpdate: {
    flexDirection: 'row',
  },
  dateUpdateText: {
    margin: 3,
    fontSize: 20,
  }
});
