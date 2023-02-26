
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, TextInput} from "react-native";
import { AuthContext } from "../store/auth-context";
import { getLogSample } from "../comunication/Controler";

import Colors from "../constants/Colors";
import Sample from "../Sample";
import LogsScreen from "./LogScreen";
import Settings from "./Settings";

function LogsChangeScreen() {
  const authCtx = useContext(AuthContext)
  const [currentTab, setCurrentTab] = useState("Logs");
  const [logSample, setLogSample] = useState([]);
  const [pickedLog, setpickedLog] = useState(null);
  let renderSample = [];

  function logStateHandler(steteLogData) {
    setpickedLog(steteLogData);
  }
  
  useEffect(() => {
  
    async function getTheData() {
      const response = await getLogSample(authCtx.token);
      setLogSample(response);
    }
    getTheData();
    renderSample = logSample.slice(logSample.length - 10, logSample.length);
  }, [pickedLog]);

  renderSample = logSample.slice(logSample.length - 10, logSample.length);


  let pickeLog = (
    <View style={styles.container2}>
        <FlatList
          data={renderSample}
          renderItem={(itemData) => (
            <Sample
              id={itemData.item.date}
              dataSample={itemData.item}
              onPress={logStateHandler}
            />
          )}
          keyExtractor={(item) => item.id}
        />

    </View>
  );
  if (pickedLog !== null) {
    pickeLog = ( 
      <Settings
      onCancel={logStateHandler}
      dataSample={pickedLog}
      />
    )};


  return (
    <View style={{ height: "100%"}}>{pickeLog}</View>
  );
}

export default LogsChangeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: '70%',
  },
  container2: {
    marginTop: 30,
    height: '81%',
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