
import { StyleSheet, Text, View, FlatList, Button} from "react-native";
import { AuthContext } from "../store/auth-context";

import Colors from "../constants/Colors";
import Sample from "../Sample";
import { useContext, useEffect, useState } from "react";
import { getLogSample } from "../comunication/Controler";

const original = [
  { 'id': '2022-12-03 16:29:54.044105', 'temperature': 21, 'humidity': 21, 'isOK': true },
  { 'id': '2022-12-03 12:29:54.044105', 'temperature': 22, 'humidity': 21, 'isOK': true },
  { 'id': '2022-12-03 18:29:54.044105', 'temperature': 23, 'humidity': 21, 'isOK': false },
  { 'id': '2022-5-03 16:29:54.044105', 'temperature': 23, 'humidity': 21, 'isOK': false },
  { 'id': '2022-6-03 16:29:54.044105', 'temperature': 23, 'humidity': 21, 'isOK': true },
  { 'id': '2022-11-03 16:29:54.044105', 'temperature': 23, 'humidity': 21, 'isOK': false },
  { 'id': '2022-1-12 16:29:54.044105', 'temperature': 23, 'humidity': 21, 'isOK': true },
  { 'id': '2022-3-25 16:29:54.044105', 'temperature': 23, 'humidity': 21, 'isOK': true },
  { 'id': '2022-8-03 16:29:54.044105', 'temperature': 23, 'humidity': 21, 'isOK': false },
];
function LogsScreen() {
  const authCtx = useContext(AuthContext)
  const [logSample, setLogSample] = useState([]);
  let renderSample = [];
  const [pickedLog, setpickedLog] = useState(null);

  function logStateHandler(steteLogData) {
    setpickedLog(steteLogData);
  }
  

  useEffect(() => {
  
    async function getTheData() {
      const response = await getLogSample();
      setLogSample(response);
    }
    getTheData();
    renderSample = logSample.slice(logSample.length - 10, logSample.length);
  }, [pickedLog]);

  renderSample = logSample.slice(logSample.length - 10, logSample.length);

  return (
    <View style={styles.container}>
        <FlatList
          data={renderSample}
          renderItem={(itemData) => (
            <Sample
              onPress={logStateHandler}
              id={itemData.item.date}
              temperature={itemData.item.temperature}
              humidity={itemData.item.humidity}
              isOK={itemData.item.isOK}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        

    </View>
  );
}

export default LogsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: '91.33%',
  },
  menuBar: {
    backgroundColor: Colors.text100,
    flex: 1,
    paddingVertical: 12,
    borderBottomWidth: 4,
    borderBottomColor: "#4d4d4d",
    flexDirection: "row",
  },

  textHeader: {
    color: Colors.text100,
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 60,
  },
  buttHeader: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
    borderRadius: 5,
  },
});