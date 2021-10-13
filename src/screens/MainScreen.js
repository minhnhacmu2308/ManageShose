import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
import Home from "./Home.js";
import Profile from "./Profile.js";
import DetailShose from "./DetailShose.js";
import ListShose from "./ListShose.js";
import ListLike from "./ListLike.js";
import OrderShose from "./OrderShose.js";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

class MainScreen extends Component {
  render() {
    return (
      <Tab.Navigator
        barStyle={{ backgroundColor: "#FFCC33" }}
        initialRouteName="Trang Chủ"
        activeColor="#FFFF"
        inactiveColor="#aaaaaa"
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
          name="Trang Chủ"
          component={Main}
        />
        {/* <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="profile" size={24} color={color} />
            ),
          }}
          name="Danh Sách"
          component={List}
        /> */}
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="profile" size={24} color={color} />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    );
  }
}
const Main = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0, // Android
        },

        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ListLike"
        component={ListLike}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ListShose"
        component={ListShose}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="DetailShose"
        component={DetailShose}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="OrderShose"
        component={OrderShose}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};
// const List = ({ navigation }) => {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           elevation: 0, // Android
//         },

//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       }}
//     >
//       <HomeStack.Screen
//         name="ListRoom"
//         component={ListRoom}
//         options={{ headerShown: false }}
//       />
//       <HomeStack.Screen
//         name="Payment1"
//         component={Payment}
//         options={{ headerShown: false }}
//       />
//       <HomeStack.Screen
//         name="DetailRoom1"
//         component={DetailRoom}
//         options={{ headerShown: false }}
//       />
//       <HomeStack.Screen
//         name="OrderRoom1"
//         component={OrderRoom}
//         options={{ headerShown: false }}
//       />
//     </HomeStack.Navigator>
//   );
// };
export default MainScreen;
