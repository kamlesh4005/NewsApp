import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'

import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    flexDirection: "row" ,
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  titleText: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: "800",

  },
  image: {
    flex: 1,
    width: width,
    resizeMode: "contain"
  }
})
 
export default class SwiperComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        response: [],
        user_namez: "",
        user_pazz: "",
    };
}
  componentDidMount() {
    const data =[
      {
        "title": "COVID-19 vaccine won't be advertised on Facebook: Aus Health Min",
        "description": "Australian Health Minister Greg Hunt on Sunday said the government will not advertise COVID-19 vaccines on Facebook. This comes after Facebook on Thursday decided to stop Australian users from viewing or sharing news and blocked several pages of domestic and foreign media outlets. \"You have corporate titans acting as sovereign bullies and they won't get away with it,\" Hunt added.",
        "author_name": "Hiral Goyal",
        "source_name": "Reuters",
        "source_url": "https://mobile.reuters.com/article/amp/idUSKBN2AL027?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/21_sun/img_1613896396027_221.jpg?",
        "created_at": 1613897414000,
        "inshorts_url": "https://shrts.in/W41Z"
      },
      {
        "title": "Indian strains of COVID-19 could be more infectious: AIIMS chief",
        "description": "After reports of new strains of coronavirus in Maharashtra emerged, AIIMS chief Dr Randeep Guleria told NDTV the new Indian strains could be highly transmissible and dangerous. He added they can even cause re-infections in people who've developed antibodies. He further said that herd immunity is a myth because at least 80% of the population needs to have developed antibodies.",
        "author_name": "Anmol Sharma",
        "source_name": "The Quint",
        "source_url": "https://www.thequint.com/amp/story/coronavirus/indian-strains-of-covid-could-be-more-infectious-aiims-chief?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/21_sun/img_1613896008698_309.jpg?",
        "created_at": 1613897396000,
        "inshorts_url": "https://shrts.in/7Mb1"
      },
      {
        "title": "Accusers agree to drop their sexual misconduct claims against James Franco",
        "description": "A settlement has been reached in a lawsuit, which alleged that Hollywood actor James Franco sexually exploited female students at an acting and film school he founded. According to the court filing, actresses and ex-students Sarah Tither-Kaplan and Toni Gaal, who filed the lawsuit in 2019, have agreed to drop their accusations against the actor as part of the settlement.",
        "author_name": "Kriti Sharma",
        "source_name": "AP",
        "source_url": "https://apnews.com/article/sexual-misconduct-los-angeles-franco-lawsuits-sarah-tither-kaplan-6bf8ffc133779f605e39fd561a5afcff?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/21_sun/img_1613894361824_111.jpg?",
        "created_at": 1613897258000,
        "inshorts_url": "https://shrts.in/rNGs"
      },
      {
        "title": "I have to spend time with Pavitra, there's no option for me: Eijaz",
        "description": "Speaking about his relationship with Pavitra Punia during a recent interview, Bigg Boss 14's Eijaz Khan said, \"I have to spend time with her as there is no option for me.\" Speaking about the reality show, he said, \"This show has given me a new life and it has given me a chance to understand myself.\"",
        "author_name": "Kriti Sharma",
        "source_name": "ABP",
        "source_url": "https://news.abplive.com/entertainment/bigg-boss-14-grand-finale-eijaz-khan-reveals-how-bb14-made-him-close-to-pavitra-punia-1445203/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/21_sun/img_1613895682523_419.jpg?",
        "created_at": 1613897196000,
        "inshorts_url": "https://shrts.in/h96c"
      },
      {
        "title": "Delhi Police arrest four more in Rinku Sharma murder case",
        "description": "Four more people were arrested in connection with the murder of Rinku Sharma in Delhi's Mangolpuri area. Nine men have been arrested so far in the case, the police said. On February 10, Sharma was stabbed by the accused after a scuffle broke out between two sides following an argument at a birthday party over their food joints in Rohini.",
        "author_name": "Sumit Josh",
        "source_name": "The Indian Express",
        "source_url": "https://indianexpress.com/article/cities/delhi/delhi-four-more-arrested-in-rinku-sharma-murder-case-7198023/lite/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/21_sun/img_1613894164127_539.jpg?",
        "created_at": 1613896312000,
        "inshorts_url": "https://shrts.in/y23c"
      },
      {
        "title": "Why can't we have shows on woman superheroes: Shashank Vyas",
        "description": "Television actor Shashank Vyas, who featured in the show 'Balika Vadhu', said there should be shows based on woman superheroes. Vyas added, \"We often talk about women empowerment so why can't we have a woman superhero?\" \"I think...because we can't accept it. All these discussions about gender equality....are often limited to debates, talk shows and books,\" he said.\n",
        "author_name": "Mahima Kharbanda",
        "source_name": "Hindustan Times",
        "source_url": "https://www.hindustantimes.com/entertainment/tv/if-we-can-have-a-krrish-then-why-can-t-we-have-woman-superheroes-too-101613881215952-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/21_sun/img_1613884307204_930.jpg?",
        "created_at": 1613895859000,
        "inshorts_url": "https://shrts.in/CCmK"
      },
      {
        "title": "I am enjoying training each day: Ali Fazal on learning kickboxing",
        "description": "Actor Ali Fazal, who is preparing for his untitled action-based movie, talked about learning kickboxing under MMA fighter Rohit Nair. Speaking about his training, Ali said, \"I have started alternating between Rohit's usual training and boxing...He is teaching me everything about the sport from the scratch.\" \"I am enjoying training each day, learning a new skill,\" he added.",
        "author_name": "Mahima Kharbanda",
        "source_name": "Hindustan Times",
        "source_url": "https://www.hindustantimes.com/entertainment/bollywood/ali-fazal-takes-to-kickboxing-trains-with-mma-coach-rohit-nair-101613881096220-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/21_sun/img_1613887544991_782.jpg?",
        "created_at": 1613895721000,
        "inshorts_url": "https://shrts.in/YQyq"
      },
      {
        "title": "Over 400 girls participate in recruitment drive in Kathua to join J&K Police ",
        "description": "As many as 415 girls from Jammu and Kashmir border areas participated in a recruitment drive for appointment of Special Police Officers (SPOs) in Kathua on Saturday. Additional SP Ramnish Gupta said the drive commenced on February 15 and Saturday was the last day. \"Only female candidates were allowed on last day...They're prepared to serve the country\" he told ANI.",
        "author_name": "Sharangee Dutta",
        "source_name": "Hindustan Times",
        "source_url": "https://www.hindustantimes.com/india-news/over-400-girls-take-part-in-recruitment-drive-for-j-k-police-in-kathua-101613867188602-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/21_sun/img_1613893423040_226.jpg?",
        "created_at": 1613895616000,
        "inshorts_url": "https://shrts.in/6Ft6"
      },
      {
        "title": "I want to challenge myself and broaden my horizons: Prachee Shah",
        "description": "Speaking about exploring different kinds of roles, television actress Prachee Shah Paandya said, \"I want to challenge myself and broaden my horizons. I am a trained equestrian, a sitar player, a kathak dancer and I have received basic military training.\" \"I want OTT to be my next step after having dabbled in films and television,\" she added.",
        "author_name": "Mahima Kharbanda",
        "source_name": "Hindustan Times",
        "source_url": "https://www.hindustantimes.com/entertainment/bollywood/the-word-stereotype-has-a-negative-connotation-prachee-shah-paandya-101613881155933-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/21_sun/img_1613890827639_906.jpg?",
        "created_at": 1613895573000,
        "inshorts_url": "https://shrts.in/tSEU"
      }
    ];
    this.setState({ response: data});
  }
  render() {
      return (
        <Swiper style={styles.wrapper} loop={false} showsPagination={false} horizontal={false}>
            {
                this.state.response.map((item, index) => {
                  return (
                    <View
                      style={{
                        flex: 1,
                        position: "absolute",
                        width: width,
                        height: height,
                        backgroundColor: "white"
                      }}
                      key={index}
                    >
                      <View style={{ flex: 2, backgroundColor: "black" }}>
                        <Image
                          source={{uri: item.image_url}}
                          style={styles.image}
                        />
                      </View>
                      <View style={{ flex: 3, padding: 5 }}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text style={{ padding: 10, fontSize: 16, color: "#3e423e", fontWeight: "100", lineHeight: 20 }}>
                          {item.description}
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