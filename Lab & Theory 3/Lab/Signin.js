import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState,useEffect } from "react";

export default function SignIn({ navigation }) {
  const userInfo = { username: "usama", password: "123" };
  const [Username, setusername] = useState("");
  const [Password, setpassword] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          navigation.navigate("Welcome to Home")
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const _Clickme = async () => {
    if (Username.length == 0 && Password.length == 0) {
      alert("Plz enter right values");
    } else {
      try {
        if (userInfo.username === Username && userInfo.password === Password) {
          await AsyncStorage.setItem("UserData", Username);
          navigation.navigate("Welcome to Home");
        } else alert("enter correct username & password");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const SignUP = () => {
    navigation.navigate("Sign up");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")}></Image>
      <Text style={{ color: "white" }}>Welcome To</Text>
      <Text style={styles.text1}>OctoBox</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(Username) => setusername(Username)}
        value={Username}
        placeholderTextColor={"white"}
        underlineColorAndroid={"black"}
        keyboardType="default"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(Password) => setpassword(Password)}
        value={Password}
        placeholderTextColor={"white"}
        underlineColorAndroid={"black"}
        secureTextEntry={true}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={_Clickme}>
        <Text style={styles.text2}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={{ color: "white" }}>
        Not a member?
        <TouchableOpacity onPress={SignUP}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            SIGN UP--{">"}
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    margin: 40,
    width: 100,
    height: 100,
  },
  text1: {
    fontSize: 40,
    fontStyle: "normal",
    color: "white",
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  input: {
    margin: 10,
    paddingLeft:10,
    height: 50,
    width: 300,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "black",
    color: "white",
  },
  button: {
    margin: 10,
    height: 40,
    width: 300,
    backgroundColor: "blue",
  },
});
