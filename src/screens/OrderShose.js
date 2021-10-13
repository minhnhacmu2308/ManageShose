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
} from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { category } from "../../db/db.js";

class OrderShose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      data: [],
    };
  }
  componentDidMount = async () => {
    let obj = await category.filter((a) => a.id == this.props.route.params.id);
    await this.setState({
      item: obj,
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
      <View style={{ justifyContent: "center" }}>
        <Header
          leftComponent={this.left()}
          backgroundColor="#FFCC33"
          centerComponent={{
            text: "TIẾN HÀNH ĐẶT HÀNG",
            style: { color: "white" },
          }}
        />
        <ScrollView>
          {this.state.item.map((l, i) => (
            <View key={i} style={{ padding: 10 }}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 25, marginTop: 10 }}
                >
                  {l.name}
                </Text>
                <View style={{ width: "100%", alignItems: "center" }}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: l.image,
                    }}
                  />
                </View>
                <Text>{l.des}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: "48%",
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#FFCC33",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#FFCC33",
                      fontWeight: "bold",
                    }}
                  >
                    Place Bid
                  </Text>
                </View>
                <View
                  style={{
                    height: 50,
                    width: "50%",
                    borderRadius: 10,
                    backgroundColor: "#FFCC33",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, color: "#ffff", fontWeight: "bold" }}
                  >
                    Mua Ngay
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  height: 50,
                  marginTop: 20,
                  borderColor: "#aaaaaa",
                  borderRadius: 5,
                }}
              >
                <View
                  style={{
                    borderRightWidth: 1,
                    width: "20%",
                    borderColor: "#aaaaaa",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ marginLeft: 10, fontSize: 18, fontWeight: "bold" }}
                  >
                    Giá
                  </Text>
                </View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text
                    style={{ marginLeft: 10, fontSize: 18, fontWeight: "bold" }}
                  >
                    {l.price}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 30,
                  borderBottomWidth: 1,
                  borderColor: "#aaaaaa",
                }}
              >
                <View style={{ width: "50%" }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}
                  >
                    Giá
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}
                  >
                    Phí ship
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}
                  >
                    Khuyến mãi
                  </Text>
                </View>
                <View
                  style={{
                    width: "50%",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <Text style={{ fontSize: 16, marginBottom: 10 }}>
                    {l.price}
                  </Text>
                  <Text style={{ fontSize: 16, marginBottom: 10 }}>
                    30.000 VNĐ
                  </Text>
                  <Text style={{ fontSize: 16, marginBottom: 10 }}>
                    10.000 VNĐ
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ width: "50%", justifyContent: "center" }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Tổng tiền:
                  </Text>
                </View>
                <View
                  style={{
                    width: "50%",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <Text>500.000 VNĐ</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default OrderShose;
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
  },
});
