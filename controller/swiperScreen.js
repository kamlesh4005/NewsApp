import React, { Component, useEffect } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Moment from 'moment';
import Swiper from 'react-native-swiper'
import Axios from 'axios'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {},
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  titleBox: {
    paddingTop: 0,
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: "800",

  },
  image: {
    flex: 1,
    width: width,
    backgroundColor: '#F5FCFF',
    resizeMode: "contain"
  },
  cardView: {
    flex: 1,
    position: "absolute",
    width: width,
    height: height,
    backgroundColor: "white"
  },
  imageView: {
    flex: 2,
    backgroundColor: "black"
  },
  contentView: {
    flex: 3,
    padding: 5
  },
  descriptionBox: {
    padding: 10,
    fontSize: 16,
    color: "#3e423e",
    fontWeight: "100",
    lineHeight: 20
  },
  dateBox: {
    padding: 10,
    paddingBottom: 0,
    fontSize: 13,
    color: "#009933",
    fontWeight: "100",
    lineHeight: 10
  }
})
export default class SwiperComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        response: [],
        currIndex: 0
    };
  }

  handleOnIndexChanged(index) {
    // Check If this is last index then append some more news in it...
    if(index+5 >= this.state.response.length){
      this.setState({currIndex: index })
      Axios.get("https://inshortsapi.vercel.app/news?category=hatke")
      .then(function (apiResponse) {
        this.setState({ response: this.state.response.concat(apiResponse.data.data)})
      }.bind(this)); 
    }
    // Get DeviceId & Update that news is readed...
    // Notifications Logic ?
  }

  componentDidMount() {
    Axios.get("https://inshortsapi.vercel.app/news?category=technology")
    .then(function (apiResponse) {
      this.setState({ response: apiResponse.data.data});
    }.bind(this));
  }

  render() {
      return (
        <Swiper 
        style={styles.wrapper} 
        loop={false} 
        showsPagination={false} 
        horizontal={false}
        bounces={true}
        key={this.state.response.length} 
        index={this.state.currIndex}
        onIndexChanged={(index) => this.handleOnIndexChanged(index)}
        >
            {
                this.state.response.map((item, index) => {
                  return (
                    <View
                      style={styles.cardView}
                      key={index}
                    >
                      <View style={styles.imageView}>
                        <Image
                          source={{uri: item.imageUrl}}
                          style={styles.image}
                        />
                      </View>
                      <View style={styles.contentView}>
                        <Text style={styles.titleBox}>{item.title}</Text>
                        <Text style={styles.dateBox}><Ionicons name="md-time" size={14} color="green" /> {Moment(item.created_at).format('lll')}</Text>
                        <Text style={styles.descriptionBox}>
                          {item.content}
                        </Text>
                      </View>
                    </View>
                  );
                })
            }
          </Swiper>
    );
  }
}