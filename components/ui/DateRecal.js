import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function ExpenseDate({dateFull, style, style2}) {
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
      <View style={style}>
        <Text style={[styles.textFieldDate,style2]}>{dayS}.</Text>
        <Text style={[styles.textFieldDate,style2]}>{month}</Text>
        <Text style={[styles.textFieldDate,style2]}>{yearS}</Text>
        <Text style={[styles.textFieldDate,style2]}>{hour}</Text>
      </View>
    );
  }
  
  export default ExpenseDate;
  
  const styles = StyleSheet.create({
    textFieldDate: {
        color: Colors.text100,
        textAlign: 'center',
      },
  })