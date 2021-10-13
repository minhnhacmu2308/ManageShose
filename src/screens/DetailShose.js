import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import { Header, Image, ListItem, Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
import { category, listRecommend } from "../../db/db.js";

class DetailShose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      data: [],
      listRecommend: listRecommend,
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
      <View>
        <Header
          leftComponent={this.left()}
          backgroundColor="#FFCC33"
          centerComponent={{
            text: "CHI TIẾT GIÀY",
            style: { color: "white" },
          }}
        />
        <ScrollView>
          <View>
            {this.state.item.map((l, i) => (
              <View key={i} style={{ padding: 10 }}>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: "bold",
                    marginBottom: 10,
                    marginLeft: 10,
                  }}
                >
                  {l.name}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginBottom: 10,
                    marginLeft: 10,
                  }}
                >
                  {l.price}
                </Text>
                <View style={{ width: "100%", alignItems: "center" }}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: l.image,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 10,
                    marginLeft: 10,
                  }}
                >
                  Mô tả:
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginBottom: 10,
                    marginLeft: 20,
                  }}
                >
                  + {l.des}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    padding: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("ListLike")}
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFCC33",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", color: "#ffff" }}>
                      Thích
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("OrderShose", { id: l.id })
                    }
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFCC33",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", color: "#ffff" }}>
                      Đặt
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              Sản phẩm tương tự:
            </Text>
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
                    <View key={i} style={styles.loading}>
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DetailShose;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCC33",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 200,
    marginBottom: 20,
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
