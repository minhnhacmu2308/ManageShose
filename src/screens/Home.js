import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from "react-native";
import {
  Header,
  Image,
  ListItem,
  Avatar,
  SearchBar,
} from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
import { listRoom, location, listRecommend, category } from "../../db/db.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: "",
      location: [],
      listRecommend: listRecommend,
      category: category,
    };
  }

  componentDidMount = () => {
    this.setState({
      data: listRoom,
      location: location,
    });
  };

  render() {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Header
          leftComponent={() => <Feather name="menu" size={24} color="#ffff" />}
          backgroundColor="#FFCC33"
          centerComponent={{
            text: " TRANG CHỦ ",
            style: { color: "white" },
          }}
          rightComponent={() => (
            <FontAwesome name="search" size={24} color="#ffff" />
          )}
        />
        <ScrollView>
          <View style={styles.viewimage}>
            <Swiper>
              <Image
                style={styles.image}
                source={{
                  uri: "https://ragus.vn/wp-content/uploads/2020/03/Air-Jordan-1-Mid-Light-Smoke-Grey-554724-092-Release-Date-Price-4.jpg",
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: "https://1-1.com.vn/dsc00523.jpg",
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeb107PuMnU7VHiW58CDWai-YVgahm9LfODA&usqp=CAU",
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJEl8SbkbQzQjXIPCNbRhwrK6ITSx206Cng&usqp=CAU",
                }}
              />
            </Swiper>
          </View>
          <View
            style={{
              width: "100%",
              paddingLeft: 10,
            }}
          >
            <Text
              style={{ fontSize: 15, color: "#FFCC33", fontWeight: "bold" }}
            >
              Đề xuất :
            </Text>
          </View>
          <View style={styles.recommend}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {this.state.listRecommend.map((l, i) => (
                  <View
                   
                    key={i}
                    style={styles.loading}
                  >
                    <Image
                      style={styles.imageRecommend}
                      source={{
                        uri: l.image,
                      }}
                    />
                    <View style={{ width: 140, padding: 10 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        {l.name}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                          color: "#aaaaaa",
                          marginTop: 5,
                        }}
                      >
                        {l.price}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ListShose")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                marginLeft: 10,
                borderBottomWidth: 1,
                width: 90,
                color: "blue",
                borderColor: "blue",
              }}
            >
              Xem thêm giày
            </Text>
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            {this.state.category.map((l, i) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("DetailShose", { id: l.id })
                }
                style={styles.imageRecommend1}
                key={i}
              >
                <Image
                  style={styles.imageRecommend1}
                  source={{
                    uri: l.image,
                  }}
                />
                {/* <Text
                  style={{
                    position: "absolute",
                    bottom: 30,
                    left: 10,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {l.name}
                </Text> */}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  item1: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  item2: {
    borderRadius: 50,
    borderColor: "#808080",
    borderWidth: 1,
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width - 30,
    height: height * 0.3,
    borderRadius: 10,
  },
  image1: {
    width: width - 40,
    height: height * 0.2,
    borderRadius: 10,
  },
  imageRecommend: {
    width: 140,
    height: height * 0.15,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  imageRecommend1: {
    width: 185,
    height: 180,
    borderRadius: 5,
    marginTop: 5,
  },
  viewimage: {
    width: width - 30,
    height: height * 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    marginHorizontal: 16,
    marginVertical: 10,
    elevation: 3,
    borderTopColor: "#71B7B7",
    backgroundColor: "#EEEEEE",
    zIndex: 1,
    borderRadius: 10,
  },
  loading: {
    backgroundColor: "#EEEEEE",
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    // shadowOffset: { width: 0, height: 0 },
    // shadowColor: "green",
    // shadowOpacity: 0.1,
    // elevation: 4,
    width: 140,
    height: height * 0.24,
  },
  item: {
    width: width - 30,
    height: 450,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    marginHorizontal: 16,
    marginVertical: 10,
    elevation: 3,
    borderTopColor: "#71B7B7",
    backgroundColor: "#ffff",
    zIndex: 1,
    borderRadius: 10,
  },
  recommend: {
    height: height * 0.25,
    marginRight: 10,
    marginLeft: 10,
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.2,
    // backgroundColor: "#ffff",
    // borderRadius: 15,
    // elevation: 2,
    // borderColor: "#694fad",
    // borderWidth: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 1,
  },
});
