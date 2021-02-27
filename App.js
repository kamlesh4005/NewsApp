import React,{ useEffect, Component } from 'react';
import { StyleSheet, StatusBar, View, BackHandler, ToastAndroid, Linking, Alert } from 'react-native';
import MainScreen from './controller/mainScreen';
import registerForPushNotifications from './controller/registerForPushNotifications';

let backPressed = 0;

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isloggedin: false,
      backPressed: 1
    }
  }

  useEffect() {
    registerForPushNotifications();
  };

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
  }

  handleBackButton(){
    if(backPressed > 0){
      BackHandler.exitApp();
      backPressed = 0;
    }else {
      backPressed++;
      Alert.alert(
        'Rate us',
        'Would you like to share your review with us? This will help and motivate us a lot.',
        [
          {text: 'Sure', onPress: () => this.openStore()},
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
      ToastAndroid.show("Please Provide 5 * rating to US....", ToastAndroid.LONG);
      Linking.openURL(
        `market://details?id=com.flipkart.android`,
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
