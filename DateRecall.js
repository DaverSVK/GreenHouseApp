import { View, Text, StyleSheet } from "react-native";
import Colors from "./constants/Colors";

function DateRecall({dateFull}) {
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
        <Text style={styles.textFieldDate}>{dayS}.</Text>
        <Text style={styles.textFieldDate}>{month}</Text>
        <Text style={styles.textFieldDate}>{hour}</Text>
      </View>
    );
  }
  
  export default DateRecall;
  
  const styles = StyleSheet.create({
    textFieldDate: {
        color: "#000",
        fontSize: 12,
        fontWeight: '800',
        marginHorizontal: 5,
        marginVertical: 3,
        textAlign: "center",
      },
  })