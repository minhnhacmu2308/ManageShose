import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  Header,
  Image,
  ListItem,
  Avatar,
  SearchBar,
} from "react-native-elements";
import { category } from "../../db/db.js";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
class ListShose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: "",
    };
  }

  componentDidMount = () => {
    this.setState({
      data: category,
    });
  };
  left = () => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.goBack()}
        style={{ marginLeft: 15, width: 50 }}
      >
        <Ionicons
          style={{ marginTop: 1 }}
          name="ios-arrow-back"
          size={24}
          color="#ffff"
        />
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <Header
          leftComponent={() => this.left()}
          backgroundColor="#FFCC33"
          centerComponent={{
            text: " DANH SÁCH GIÀY",
            style: { color: "white" },
          }}
        />
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 10,
              width: "100%",
              justifyContent: "space-between",
              marginBottom: 80,
            }}
          >
            {this.state.data.map((l, i) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("DetailShose", { id: l.id })
                }
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
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ListShose;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 160,
    padding: 10,
  },
  item: {
    borderWidth: 1,
    height: 100,
    marginTop: 10,
    borderRadius: 5,
    borderColor: "#694fad",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  loading: {
    backgroundColor: "#EEEEEE",
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    // shadowOffset: { width: 0, height: 0 },
    // shadowColor: "green",
    // shadowOpacity: 0.1,
    // elevation: 4,
    width: "48%",
    height: height * 0.24,
  },
  body: {
    marginLeft: 10,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: "#694fad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  imageRecommend: {
    width: "100%",
    height: height * 0.15,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
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
