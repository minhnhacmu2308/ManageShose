import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import {
  Header,
  Image,
  ListItem,
  Avatar,
  SearchBar,
  Input,
  CheckBox,
} from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { category } from "../../db/db.js";

class ListLike extends Component {
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
  onChange = () => {
    if (this.state.checked1 == true) {
      this.setState({
        checked: true,
        checked1: false,
      });
    }
  };
  onChange1 = () => {
    if (this.state.checked == true) {
      this.setState({
        checked1: true,
        checked: false,
      });
    }
  };
  render() {
    return (
      <View>
        <Header
          leftComponent={this.left()}
          backgroundColor="#FFCC33"
          centerComponent={{
            text: "DANH SÁCH YÊU THÍCH",
            style: { color: "white" },
          }}
        />
        <ScrollView>
          <View style={{ padding: 10, marginBottom: 100 }}>
            {this.state.data.map((l, i) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("DetailShose", { id: l.id })
                }
                key={i}
                style={{
                  width: "100%",
                  height: 120,
                  borderWidth: 1,
                  borderColor: "#aaaaaa",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: l.image,
                  }}
                />
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: -10,
                  }}
                >
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
                <View style={{ justifyContent: "center" }}>
                  <AntDesign name="heart" size={24} color="red" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ListLike;
const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: 120,
  },
});
