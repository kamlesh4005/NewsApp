import React,{ useEffect, Component } from 'react';
import { StyleSheet, StatusBar, View, BackHandler, ToastAndroid, Linking, Alert } from 'react-native';
import MainScreen from './controller/mainScreen';
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants';
import registerForPushNotifications from './controller/registerForPushNotifications';
import config from './controller/config.json';
import getSetUserData from "./controller/utils/getSetUserData";

let backPressed = 0;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
const deviceId = Constants.deviceId;
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      userData: {},
      isloggedin: false,
      backPressed: 1
    }
  }

  componentDidMount(){
    this._getSetUserData(deviceId)
    // registerForPushNotifications(deviceId)
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    Notifications.addNotificationReceivedListener(this._handleNotification);
    Notifications.addNotificationResponseReceivedListener(this._handleNotificationResponse);
  }

  _getSetUserData = deviceId => {
      return getSetUserData(deviceId)
    .then(function (userData){
      return this.setState({userData: userData});
    }.bind(this))
    .catch(
      (err) => console.log('Error while fetching user data ', err)
    )
  }

  _handleNotification = notification => {
    this.setState({ notification: notification });
  };

  _handleNotificationResponse = response => {
    console.log("\n\n response ", response);
  };

  handleBackButton(){
    if(backPressed > 0){
      BackHandler.exitApp();
      backPressed = 0;
    }else {
      backPressed++;
      // Check If we can provide this Alert as Model
      console.log("\n\n\n THIS. STATE.USERDATA - \n", JSON.stringify(this.state.userData))
      Alert.alert(
        'We’d love to hear your feedback!',
        'Thank you for being a customer🙂\nWould you like to share your review with us? This will help and motivate us a lot.',
        [
          {text: 'Sure👍', onPress: () => this.openStore()},
          {
            text: 'Later!',
            onPress: () => console.log('Later Pressed'),
            style: 'cancel',
          },
          {text: 'Exit', onPress: () => BackHandler.exitApp()},
        ],
        {cancelable: false},
      );
      //ToastAndroid.show("Press Again To Exit", ToastAndroid.SHORT);
      setTimeout( () => { backPressed = 0}, 2000);
      return true;
    }
  }

  openStore() {
    if (Platform.OS != 'ios') {
      ToastAndroid.show("Let us enjoy your special 5 🌟 Rating.", ToastAndroid.LONG);
      Linking.openURL(
        config.app.playStoreUrl,
      ).catch(
          (err) => alert('Please check for Google Play Store')
      );
    } else {
      Linking.openURL(
        `itms://itunes.apple.com/in/app/apple-store/${APPLE_STORE_ID}`,
      ).catch((err) => alert('Please check for the App Store'));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "dark-content" 
        animated={true}
        barStyle= "default"
        hidden = {false} translucent = {true}/>
        <MainScreen />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
