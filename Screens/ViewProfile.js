
import { StyleSheet, Text, View, FlatList, Image, TextInput} from "react-native";

import Colors from "../constants/Colors";
import Sample from "../Sample";
import profile from '../assets/profile.png';

function ViewProfile() {
  
    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image source={profile} style={{
                    width: 200,
                    height: 200,
                    borderRadius: 10,
                    marginTop: 8
                }}></Image>
            </View>
          <View style={styles.settingsBlock}>  
            <Text style={styles.textHeader}>
                Personal informations:
            </Text>
            
          </View>
          
        </View>
      );
}

export default ViewProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: '89%',
  },
  containerImg:{
    alignItems: "center",
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