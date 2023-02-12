import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import firebaseConfig from '../util/firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

initializeApp(firebaseConfig);

function Settings({onCancel,id,temperature, humidity }) {
  const [url, setUrl] = useState();
  function cancelHandler() {
    onCancel(null);
  }
  function deleteHandler() {
    onCancel(null);
  }
  
  useEffect(() => {
    const func = async () => {
      const storage = getStorage();
      const reference = ref(storage, '/cam-2023-02-10_17.27.02.jpg');
      await getDownloadURL(reference).then((x) => {
        setUrl(x);
      }); 
    }
    func();
  }, [])
  
    return (
        <View style={styles.container}>   
          <View style={styles.settingsBlock}>  
            <Text style={styles.textHeader}>
                Will be added....
            </Text>
          </View>
          <Text style={styles.textHeader}>
              {temperature}
            </Text>
            <Text style={styles.textHeader}>
              {humidity}
            </Text>
          <View style={styles.containerImg}>
            <Image 
            style = {{width: '80%', height: '70%'}} 
            source = {{uri: url}} 
            />
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
    marginTop: 30,
    height: '89%',
  },
  containerImg: {
    flex: 1,
    alignItems: 'center',
    
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