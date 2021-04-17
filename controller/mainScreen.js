import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import SwiperScreen from './swiperScreen';
import config from './config.json';
import {
  AdMobBanner,
} from 'expo-ads-admob';

const styles = StyleSheet.create({
    wrapper: {},
    bottomAd: {
     bottom:0, 
     position:"absolute"
    },
    bottomBanner: {
      position: "absolute",
      bottom: 0
    },
    container: {
    //   flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
})

export default class MainScreen extends Component {
    render() {
        return (
            <View>
            <SwiperScreen />
            {
              config.post.showBottomBannerAds === true ? 
              <View style={styles.container}>
                <AdMobBanner
                  style={styles.bottomBanner}
                  bannerSize="fullBanner"
                  adUnitID="ca-app-pub-3940256099942544/6300978111"
                  // Test ID, Replace with your-admob-unit-id
                  // testDeviceID="EMULATOR"
                  didFailToReceiveAdWithError={this.bannerError}
                  />
              </View>
              : <View></View>
            }
            </View>
        );
    }
}