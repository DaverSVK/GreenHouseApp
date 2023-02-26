import React, { useContext, useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import profile from './assets/profile.png';
// Tab ICons...
import home from './assets/home.png';
import greenhouse from './assets/greenhouse.png';
import notifications from './assets/bell.png';
import settings from './assets/settings.png';
import logout from './assets/logout.png';
// Menu
import menu from './assets/menu.png';
import close from './assets/close.png';

// Photo
import photo from './assets/photo.png';
import Colors from "./constants/Colors";
import LogsScreen from './Screens/LogScreen';
import LogsChangeScreen from './Screens/LogsChangeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import Notification from './Screens/LogsChangeScreen';
import Settings from './Screens/Settings';
import ViewProfile from './Screens/ViewProfile';
import { AuthContext } from './store/auth-context';

export default function MainScreen() {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
 
  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  let pickeLog = (
    <LogsChangeScreen/>
  );
  if (currentTab == "Greenhouse") {
    pickeLog = ( 
      <SettingsScreen/>
    )};
  if (currentTab == "Notifications") {
    pickeLog = ( 
      <Notification/>
    )};
  if (currentTab == "Settings") {
    pickeLog = ( 
      <Settings/>
    )};
  if (currentTab == "ViewProfile") {
    pickeLog = ( 
      <ViewProfile/>
    )};

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Username</Text>

        <TouchableOpacity onPress={() => {
        setCurrentTab('ViewProfile')
      }}>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Greenhouse", greenhouse)}
          {/* {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}*/}
          {/* {TabButton(currentTab, setCurrentTab, "Settings", settings)}  */}

        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View>

      </View>

      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          {/* <View style={{   
            width: showMenu ? '97%' : '100%',
            height: showMenu ? '97%' : '100%',
            backgroundColor: Colors.primary400,
            marginVertical: 25,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            borderRadius: 10,}}> */}
            
          <View style={{width: '100%', flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 210,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>
            
            <Image source={showMenu ? close : menu} style={{
              width: 35,
              height: 35,
              tintColor: 'black',
              marginTop: 25,
            

            }}></Image>
            </TouchableOpacity>
            <View style={{justifyContent: 'center',paddingRight: 35, alignItems: 'center', flex: 1}}>
              <Text style={{
                flex: 1,
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20
                }}>
                {currentTab}
              </Text>
            </View>
            </View>

          
          <View style={{ height: "100%"}}>
            <View>{pickeLog}</View>
          </View>
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  const authCtx = useContext(AuthContext);
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        authCtx.logout();
        
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? Colors.primary600 : "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? Colors.primary600 : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

});