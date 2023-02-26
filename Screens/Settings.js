import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";
import firebaseConfig from '../util/firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import DateRecallSingle from '../DateRecallSingle';
import Donut from '../components/ui/Donut';

initializeApp(firebaseConfig);

function Settings({ onCancel,dataSample }) {
  const [url, setUrl] = useState();
  function cancelHandler() {
    onCancel(null);
  }
  function deleteHandler() {
    onCancel(null);
  }
  const picture ='/cam-' + dataSample.date.substring(0,dataSample.date.indexOf(' ')) + '_' + dataSample.date.substring(dataSample.date.indexOf(' ')+1,dataSample.date.indexOf(':')) + '.' + dataSample.date.substring(dataSample.date.indexOf(':')+1,dataSample.date.indexOf(':')+3) + '.' + dataSample.date.substring(dataSample.date.indexOf(':')+4,dataSample.date.indexOf('.')) + '.jpg';
  useEffect(() => {
    const func = async () => {
      const storage = getStorage();
      const reference = ref(storage, picture);
      await getDownloadURL(reference).then((x) => {
        setUrl(x);
      }); 
    }
    func();
  }, [])
 
  
    return (
        <View style={styles.container}>   
          <View style={styles.settingsBlock}>
            <DateRecallSingle dateFull={dataSample.date}/>
          </View>
          <View style={styles.scrollbox}>
          <ScrollView>
            <View style={styles.containerSection}>
              <View>
                  <Text style={styles.textHeaderVal}>
                  Temperature: 
                </Text>
                <Text style={styles.textHeaderVal}>
                  Humidity: 
                </Text>
                <Text style={styles.textHeaderVal}>
                  Pressure: 
                </Text>
                <Text style={styles.textHeaderVal}>
                  Lux: 
                </Text>
                <Text style={styles.textHeaderVal}>
                  Altitude: 
                </Text>
              </View>
              <View>
                <Text style={styles.textHeaderVal}>
                  {dataSample.temperature} °C
                </Text>
                <Text style={styles.textHeaderVal}>
                  {dataSample.humidity} %
                </Text>
                <Text style={styles.textHeaderVal}>
                  {dataSample.pressure} hPa
                </Text>
                <Text style={styles.textHeaderVal}>
                  {dataSample.lux} lux
                </Text>
                <Text style={styles.textHeaderVal}>
                  {dataSample.altitude} m
                </Text>
              </View>
              </View>
              <View style={styles.containerSection2}>
              <View style={styles.containerWater}>
                <View style={styles.containerWaterSingle}>
                  <Text style={styles.basicTextWater}>Water2: </Text>
                  <Donut percentage={Number(dataSample.water)} valueText={dataSample.water}/>
                </View>
                <View style={styles.containerWaterSingle}>
                  <Text style={styles.basicTextWater}>Water2: </Text>
                  <Donut percentage={Number(dataSample.water2)} valueText={dataSample.water2}/>
                </View>
              </View>
              <View style={styles.containerWater}>
                <View style={styles.containerWaterSingle}>
                  <Text style={styles.basicTextWater}>Water3: </Text>
                  <Donut percentage={Number(dataSample.water3)} valueText={dataSample.water3}/>
                </View>
                <View style={styles.containerWaterSingle}>
                  <Text style={styles.basicTextWater}>Water4: </Text>
                  <Donut percentage={Number(dataSample.water4)} valueText={dataSample.water4}/>
                </View>
                
              </View>

              </View>
            <View style={styles.containerImg}>
              <Image 
              style = {{width: '100%', aspectRatio: 1/1}} 
              source = {{uri: url}} 
              />
            </View>   
          </ScrollView>     
          </View>
          <View style={styles.buttonBox}>   
            <Button
              title="Delete"
              color="#900"
              onPress={deleteHandler}
            />
            <Button
                  title="Cancel"
                  color="#7289"
                  onPress={cancelHandler}
            />
          </View>
        </View>
      );
}

export default Settings;


const styles = StyleSheet.create({
  container: {
    marginBottom: 400,
  },
  containerImg: {
    width: '100%',
    alignItems: 'center',
    
  },
  settingsBlock: {
    paddingBottom: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#000",
    flexDirection: "row",
    justifyContent: 'center'
  },

  textHeader: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 10,
  },
  textHeaderVal: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
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
  buttonBox: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  scrollbox: {
    height: '100%',
    width: '100%',
  },
  containerWaterSingle: {
    flesx: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '42%',
    alignItems: 'center',
  },
  basicTextWater: {
    color: '#000',
    fontSize: 20,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  containerWater: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginVertical: '2%',
    marginHorizontal: '7%',
    
  },
  containerSection: {
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 20,
    marginVertical: 10,
    flexDirection: "row",
  },
  containerSection2: {
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 20,
    marginVertical: 10,
  },
});