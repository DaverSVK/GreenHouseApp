
import { StyleSheet, Text, View, FlatList, Button, TextInput, TouchableWithoutFeedback, Keyboard} from "react-native";

import Colors from "../constants/Colors";
import Sample from "../Sample";

function SettingsScreen() {
  
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
            placeholder="useless placeholder"
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
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </View>   
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
              Water level:
          </Text>
          <TextInput
            style={styles.inputField}
            value={25}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </View>   
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
              Light intensity:
          </Text>
          <TextInput
            style={styles.inputField}
            value={25}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </View>   
        <View style={styles.settingsBlock}>  
          <Text style={styles.textHeader}>
              Sampling T:
          </Text>
          <TextInput
            style={styles.inputField}
            value={25}
            placeholder="useless placeholder"
            keyboardType="numeric"
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