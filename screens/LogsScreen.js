import { StyleSheet, Text, View, FlatList } from "react-native";

import Colors from "../constants/Colors";
import SingleLog from "../components/presets/SingleLog";
import Controler from "../comunication/Controler";
import { useState, useEffect } from "react";
import SingleLogFullSize from "../components/presets/SingleLogFullSize";

function LogsScreen() {
  const [logSample, setLogSample] = useState([]);
  let renderSample = [];
  const [pickedLog, setpickedLog] = useState(null);

  function logStateHandler(steteLogData) {
    setpickedLog(steteLogData);
  }

  useEffect(() => {
    Controler.getLogSample().then((response) => {
      setLogSample(response.data);
      renderSample = logSample.slice(logSample.length - 10, logSample.length);
    });
  }, [pickedLog]);

  renderSample = logSample.slice(logSample.length - 10, logSample.length);

  let pickeLog = (
    <FlatList
      data={renderSample}
      renderItem={(itemData) => (
        <SingleLog
          onPress={logStateHandler}
          id={itemData.item.id}
          date={itemData.item.date}
          temperature={itemData.item.temperature}
          humidity={itemData.item.humidity}
          water={itemData.item.water}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
  if (pickedLog !== null) {
    pickeLog = (
      <SingleLogFullSize
        onCancel={logStateHandler}
        id={pickedLog.id}
        date={pickedLog.date}
        temperature={pickedLog.temperature}
        humidity={pickedLog.humidity}
        water={pickedLog.water}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <Text style={styles.buttHeader}>Butt</Text>
        <Text style={styles.textHeader}>Data log</Text>
      </View>
      <View style={styles.contentContainer}>{pickeLog}</View>
    </View>
  );
}

export default LogsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuBar: {
    backgroundColor: Colors.primary500,
    flex: 1,
    paddingVertical: 12,
    borderBottomWidth: 4,
    borderBottomColor: "#4d4d4d",
    flexDirection: "row",
  },
  contentContainer: {
    flex: 7,
  },
  textHeader: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 60,
  },
  buttHeader: {
    color: "#006205",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: "#006205",
    borderRadius: 5,
  },
});
