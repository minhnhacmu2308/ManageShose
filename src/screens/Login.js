import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
const { height, width } = Dimensions.get("window");
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nof: "",
    };
  }
  onLogin = () => {
    if (
      this.state.email == "admin@gmail.com" &&
      this.state.password == "123456"
    ) {
      this.props.navigation.navigate("Main");
    } else {
      this.setState({
        nof: "Email or password is incorret",
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://kingshoes.vn/data/upload/media/giay-sneaker-chinh-hang-tphcm-tai-king-shoes-album-bo-suu-tap(1).jpg",
          }}
        />
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderRadius: 25,
            fontSize: 16,
            paddingLeft: 15,
            paddingTop: -10,
            backgroundColor: "#ffff",
            color: "#3366FF",
            marginHorizontal: 25,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#bbb",
          }}
          onChangeText={(email) => this.setState({ email })}
          placeholder={"Email"}
          placeholderTextColor={"#694fad"}
          underlineColorAndroid="transparent"
        ></TextInput>
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderRadius: 25,
            fontSize: 16,
            paddingLeft: 15,
            paddingTop: -10,
            backgroundColor: "#ffff",
            color: "#3366FF",
            marginHorizontal: 25,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#bbb",
          }}
          onChangeText={(password) => this.setState({ password })}
          placeholder={"Password"}
          placeholderTextColor={"#694fad"}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        ></TextInput>
        <Text style={{ color: "red" }}>{this.state.nof}</Text>
        <View style={styles.btn}>
          <View style={{ width: "10%" }}>
            <Entypo name="facebook-with-circle" size={24} color="blue" />
          </View>
          <View style={{ width: "60%" }}>
            <Text style={styles.textlogin}>Tiếp tục bằng facebook</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => this.onLogin()}
        >
          <Text style={styles.textlogin}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      // <TouchableOpacity style={{marginTop:100}} onPress={() => this.props.navigation.navigate("Main")}>
      //   <Text>Login</Text>
      // </TouchableOpacity>
    );
  }
}

export default Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCC33",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  textlogin: {
    textAlign: "center",
    color: "#ffff",
    fontWeight: "bold",
  },
  btnLogin: {
    width: 300,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#FFCC33",
    marginTop: 25,
    borderWidth: 2,
    borderColor: "#ffff",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    width: 300,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#FFCC33",
    marginTop: 25,
    borderWidth: 2,
    borderColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
  },
});
