
import { StyleSheet, Text, View, FlatList, Button, TextInput} from "react-native";

import Colors from "../constants/Colors";
import Sample from "../Sample";

function Notification() {
  
  return (
    <View style={styles.container}>   
      <View style={styles.settingsBlock}>  
        <Text style={styles.textHeader}>
            Will be added....
        </Text>
        
      </View>
      
    </View>
  );
}

export default Notification;

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