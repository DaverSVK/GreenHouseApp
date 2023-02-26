import { View, Text, StyleSheet } from "react-native";
import Colors from "./constants/Colors";

function DateRecallSingle({dateFull}) {
    const months = ["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"];
    const fullDate = dateFull;
    const noYear = fullDate.substring(fullDate.indexOf('-')+1);
    const noMonth = noYear.substring(noYear.indexOf('-')+1);
    const noDay = noMonth.substring(noMonth.indexOf(' ')+1);
  
    const yearS = fullDate.substring(0, fullDate.indexOf('-'));
    const monthS = noYear.substring(0, noYear.indexOf('-'));
    const dayS = noMonth.substring(0, noMonth.indexOf(' '));
    const hour = noDay.substring(0, noDay.indexOf(':')+3);
  
    const month = months[(monthS)-1];
 
    return (
      <View >
        <Text style={styles.textFieldDate}>{dayS}. {month} {yearS} {hour}</Text>
      </View>
    );
  }
  
  export default DateRecallSingle;
  
  const styles = StyleSheet.create({
    textFieldDate: {
        color: "#000",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 25,
        textAlign: "center",
      },
  })