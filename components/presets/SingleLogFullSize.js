import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../../constants/Colors";
import DateRecal from "../ui/DateRecal";
import Controler from "../../comunication/Controler";
import Donut from "./Donut";

function SingleLogFullSize({onCancel,id,date, temperature, humidity,water,water2,water3,water4 }) {
  const dateFull = new String(date);
  function cancelHandler() {
    onCancel(null);
  }
  function deleteHandler() {
    onCancel(null);
    Controler.deleteLogSample(id);
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
          <View style={styles.containerWaterSingle}>
            <Text style={styles.basicTextWater}>Water1: </Text>
            <Donut percentage={Number(water)} valueText={water}/>
          </View>
          
          <View style={styles.containerWaterSingle}>
            <Text style={styles.basicTextWater}>Water2: </Text>
            <Donut percentage={Number(water2)} valueText={water2}/>
          </View>
        </View>
        <View style={styles.containerWater}>
          <View style={styles.containerWaterSingle}>
            <Text style={styles.basicTextWater}>Water3: </Text>
            <Donut percentage={Number(water3)} valueText={water3}/>
          </View>
          
          <View style={styles.containerWaterSingle}>
            <Text style={styles.basicTextWater}>Water3: </Text>
            <Donut percentage={Number(water4)} valueText={water4}/>
          </View>
        </View>
        <View style={styles.containerButton}>
        <Button
              title="Delete"
              color={Colors.buttonDelete}
              onPress={deleteHandler}
              />
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
    width: '80%',
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
    width: '100%',
    marginVertical: 10,
    
  },
  containerWaterSingle: {
    flesx: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
    alignItems: 'center',
  },
  containerButton: {
    borderRadius: 50,
    margin: 15,
    marginTop: 25,
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
