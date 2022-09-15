import * as React from 'react';
import {View, TextInput, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';
import Svg, {G, Circle} from 'react-native-svg';



function Donut({
    percentage,
    valueText,
    radius = 45,
    strokeWidth = 10,
    color = Colors.watterGraph,
    textColor = Colors.watterGraphText,
    max = 100,
}){
    const circleRef = React.useRef();
    const halfCircle = radius+strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;
   
    const maxPer = 100*percentage/max;
    const strokeDashoffset = circleCircumference - (circleCircumference*maxPer)/100
    React.useEffect(() => {
            });
    return(
        <View>
            <Svg width = {radius*2} height = {radius*2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
                <G rotation={'-90'} origin={`${halfCircle}, ${halfCircle} `}>
                    <Circle 
                        cx='50%'
                        cy='50%'
                        stroke={Colors.primary700}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill='transparent'
                        strokeOpacity={0.2}
                    />
                    <Circle 
                        ref={circleRef}
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill='transparent'
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap='round'
                    />
                </G>
            </Svg>
            <TextInput
                underlineColorAndroid="transparent"
                editable={false}
                defaultValue= {valueText+ '%'} 
                style={[
                    StyleSheet.absoluteFillObject,
                    { fontSize: radius / 2.1, color: textColor },
                    styles.text,
                ]}
            />
        </View>
    );
}
export default Donut;

const styles = StyleSheet.create({
    text: { fontWeight: '800', textAlign: 'center' },
  });