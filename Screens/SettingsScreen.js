
import { useState, useEffect, React } from "react";
import { StyleSheet, Text, View, FlatList, Button, TextInput, TouchableWithoutFeedback, Keyboard} from "react-native";
import { getSettingsSample } from "../comunication/Controler";

import Colors from "../constants/Colors";
import Sample from "../Sample";

function SettingsScreen() {
  const [renderSample, setrenderSample] = useState([{
    temperature: 0,
    humidity: 0,
    water_level: 0,
    light_intensity: 0,
    sampling_time: 0,
  }]);

    let temperature= "";
    let humidity= "";
    let water_level= "";
    let light_intensity= "";
    let sampling_time= "";
    async function getTheData() {
      const response = await getSettingsSample();
      setrenderSample(response);
     
    }  

  useEffect(() => {
    getTheData();

  }, []);
  if(renderSample.temperature >= 0 ){
    temperature= renderSample.temperature.toString() + ' °C';
    humidity= renderSample.humidity.toString() + ' %';
    water_level= renderSample.water_level.toString() + ' %';
    light_intensity= renderSample.light_intensity.toString() + ' lux';
    sampling_time= renderSample.sampling_time.toString() + ' sec';
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accesible={false}>
      <View style={styles.container}>   
      
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
          Temperature:
          </Text>
          <TextInput
            style={styles.inputField}
            value={25}
            placeholder={temperature}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
            Humidity:
          </Text>
          <TextInput
            style={styles.inputField}
            value={25}
            keyboardType="numeric"
            placeholder={humidity}
          />
        </View>   
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
              Water level:
          </Text>
          <TextInput
            style={styles.inputField}
            value={25}
            keyboardType="numeric"
            placeholder={water_level}
          />
        </View>   
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
              Light intensity:
          </Text>
          <TextInput
            style={styles.inputField}
            value={25}
            keyboardType="numeric"
            placeholder={light_intensity}
          />
        </View>   
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
              Sampling T:
          </Text>
          <TextInput
            style={styles.inputField}
            value={25}
            keyboardType="numeric"
            placeholder={sampling_time}
          />
        </View>  
        <View style={{marginTop: 30}}>
          <Button
                title="Change settings"
                color={'#000'}
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
    fontSize: 30,
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