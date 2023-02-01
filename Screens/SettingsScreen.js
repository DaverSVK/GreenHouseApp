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
  const [enteredLightIntensity, setEnteredLightIntensity] = useState(0);
  const [renderSample, setrenderSample] = useState([{
    temperature: 0,
    humidity: 0,
    water_level: 0,
    light_intensity: 0,
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
      case 'lightIntensity':
        setEnteredLightIntensity(enteredValue);
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
      setEnteredLightIntensity(response.light_intensity);
      setEnteredSamplingTime(response.sampling_time);
      
      setrenderSample(response);
     
    }
    function updateHandler(){
      updateSettingsSample({
        temperature: enteredTemperature,
        humidity: enteredHumidity,
        water_level: enteredWaterLevel,
        light_intensity: enteredLightIntensity,
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
            Humidity [%]:
          </Text>
          <TextInput
            style={styles.inputField}
            onChangeText={updateInputValueHandler.bind(this, 'humidity')}
            value={enteredHumidity}
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
              Light intensity [lux]:
          </Text>
          <TextInput
            style={styles.inputField}
            onChangeText={updateInputValueHandler.bind(this, 'lightIntensity')}
            value={enteredLightIntensity}
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
        <View style={{marginTop: 30}}>
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