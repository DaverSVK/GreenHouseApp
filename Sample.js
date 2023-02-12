import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Colors from "./constants/Colors";
import good from "./assets/good.png";
import wrong from "./assets/wrong.png";
import temp from "./assets/temp.png";
import hum from "./assets/hum.png";
import DateRecall from "./DateRecall";

function Sample({id, temperature, humidity, isOK,onPress}) {
  function pressHandler() {
    onPress({id, temperature, humidity});
  }
    return (
      <View>
        <Pressable 
            style={styles.containerLog}
            onPress={pressHandler}>
          <View style={styles.containerDate}>
            <DateRecall dateFull={id}/>
          </View>
          <View style={styles.containerData}>
            
            <Image source={temp} style={{
                width: 35,
                height: 35,
                tintColor: 'white',
                }}></Image>
              <Text style={styles.textField}>{temperature}°C</Text>
            
            
            <Image source={hum} style={{
                width: 35,
                height: 35,
                tintColor: 'white',
                }}></Image>
              <Text style={styles.textField}>{humidity}%</Text>
           
                <Image source={isOK ? good : wrong} style={{
                width: 40,
                height: 40,
                tintColor: isOK ?'white' : Colors.marker100,
                margin: 5,
                }}></Image>
            
          </View>
          </Pressable>
      </View>
    );
  }
  export default Sample;
  
  const styles = StyleSheet.create({
    containerLog: {
      margin: 4,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: Colors.primary500,
      backgroundColor: Colors.primary500,
      flexDirection: "row",
      justifyContent: "space-between",
      elevation: 4,
    },
    containerDate: {
      flex: 3,
      margin: 5,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      backgroundColor: Colors.text200,
    },
    containerData: {
      padding: 5,
      flex: 7,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    textField: {
      color: "#fff",
      fontSize: 20,
      fontWeight: '500',
      marginHorizontal: 5,
      textAlign: "center",
    },
    textFieldB: {
        color: "#000",
        fontSize: 17,
        fontWeight: '800',
        marginHorizontal: 5,
        textAlign: "center",
      },
  });
  