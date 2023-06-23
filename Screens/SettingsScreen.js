import { useState, useEffect, React, useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button, TextInput, TouchableWithoutFeedback, Keyboard} from "react-native";
import { getSettingsSample, updateSettingsSample } from "../comunication/Controler";

import Colors from "../constants/Colors";
import Sample from "../Sample";
import { AuthContext } from "../store/auth-context";

function SettingsScreen() {
  const [enteredTemperature, setEnteredTemperature] = useState(0);
  const [enteredHumidity, setEnteredHumidity] = useState(0);
  const [enteredWaterLevel, setEnteredWaterLevel] = useState(0);
  const [enteredSamplingTime, setEnteredSamplingTime] = useState(0);
  const [enteredLightStart, setEnteredLightStart] = useState(0);
  const [enteredLightDuration, setEnteredLightDuration] = useState(0);
  const [enteredWatering, setEnteredWatering] = useState(0);
  const [renderSample, setrenderSample] = useState([{
    temperature: 0,
    humidity: 0,
    water_level: 0,
    light_start: 0,
    light_duration: 0,
    watering: 0,
    sampling_time: 0,
  }]);
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    getTheData();

  }, [updateSettingsSample]);

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'temperature':
        setEnteredTemperature(enteredValue);
        break;
      case 'humidity':
        setEnteredHumidity(enteredValue);
        break;
      case 'waterLevel':
        setEnteredWaterLevel(enteredValue);
        break;
      case 'lightStart':
        setEnteredLightStart(enteredValue);
        break;
      case 'lightDuration':
        setEnteredLightDuration(enteredValue);
        break;
      case 'watering':
        setEnteredWatering(enteredValue);
        break;
      case 'samplingTime':
        setEnteredSamplingTime(enteredValue);
        break;
    }
  }


    async function getTheData() {
      const response = await getSettingsSample(token);

      setEnteredTemperature(response.temperature);
      setEnteredHumidity(response.humidity);
      setEnteredWaterLevel(response.water_level);
      setEnteredLightStart(response.light_start);
      setEnteredLightDuration(response.light_duration);
      setEnteredWatering(response.watering);
      setEnteredSamplingTime(response.sampling_time);

      setrenderSample(response);
     
    }
    function updateHandler(){
      updateSettingsSample({
        temperature: enteredTemperature,
        humidity: enteredHumidity,
        water_level: enteredWaterLevel,
        light_start: enteredLightStart,
        light_duration: enteredLightDuration,
        watering: enteredWatering,
        sampling_time: enteredSamplingTime,},token);
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accesible={false}>
      <View style={styles.container}>   
      
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
          Temperature [°C]:  
          </Text>
          <TextInput
            style={styles.inputField}
            onChangeText={updateInputValueHandler.bind(this, 'temperature')}
            value={enteredTemperature}
            keyboardType="numeric"
          />
        </View> 
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
              Water level [%]:
          </Text>
          <TextInput
            style={styles.inputField}
            onChangeText={updateInputValueHandler.bind(this, 'waterLevel')}
            value={enteredWaterLevel}
            keyboardType="numeric"
          />
        </View>   
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
              Light start [time]:
          </Text>
          <TextInput
            style={styles.inputField}
            onChangeText={updateInputValueHandler.bind(this, 'lightStart')}
            value={enteredLightStart}
            keyboardType="numeric"
          />
        </View>   
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
              Light duration [sec]:
          </Text>
          <TextInput
            style={styles.inputField}
            onChangeText={updateInputValueHandler.bind(this, 'lightDuration')}
            value={enteredLightDuration}
            keyboardType="numeric"
          />
        </View> 
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
              Watering [on/off]:
          </Text>
          <TextInput
            style={styles.inputField}
            onChangeText={updateInputValueHandler.bind(this, 'watering')}
            value={enteredWatering}
            keyboardType="numeric"
          />
        </View>     
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
              Sampling T [sec]:
          </Text>
          <TextInput
            style={styles.inputField}
            onChangeText={updateInputValueHandler.bind(this, 'samplingTime')}
            value={enteredSamplingTime}
            keyboardType="numeric"
          />
        </View>  
        <View style={{marginTop: 10}}>
          <Button
                title="Change settings"
                color={'#000'}
                onPress={updateHandler}
          />
        </View>
        
      </View>
      </TouchableWithoutFeedback>
    
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: '89%',
  },
  settingsBlock: {
    paddingBottom: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#000",
    flexDirection: "row",
    justifyContent: 'space-between'
  },

  textHeader: {
    color: "#000",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 10,
  },
  inputField: {
    height: 40,
    width: '20%',
    marginTop: 25,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
  },
  
});