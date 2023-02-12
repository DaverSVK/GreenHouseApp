
import { StyleSheet, Text, View, FlatList, Button} from "react-native";
import { AuthContext } from "../store/auth-context";

import Colors from "../constants/Colors";
import Sample from "../Sample";




function LogsScreen(renderSample) {
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
 
});