import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function Home({ navigation }) {
  const [name, setname] = useState("");
  const Clickme = () => {
    AsyncStorage.clear();
    navigation.navigate("Sign In")
  };
  const Clickhere = () => {
    navigation.navigate("My Profile");
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          setname(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/img.png")}></Image>
      <Text style={styles.text}>My name is {name}</Text>
      <TouchableOpacity style={styles.button} onPress={Clickhere}>
        <Text style={styles.text1}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={Clickme}>
        <Text style={styles.text1}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 450,
    alignSelf: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  button: {
    height: 40,
    width: 300,
    backgroundColor: "blue",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white",
    marginTop: 10,
    marginLeft: 90,
  },
});
