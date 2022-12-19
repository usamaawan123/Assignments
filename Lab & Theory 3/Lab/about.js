import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";

export default function About() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/me.png")}></Image>
      <Text style={styles.text}>Name:- Usama Bin Arshad</Text>
      <Text style={styles.text}>Reg No:- SP20-BSE-020</Text>
      <Text style={styles.text}>Current Status:- Student</Text>
      <Text style={styles.text}>University:- CUI Attock Campus</Text>
      <Text style={styles.text}>Age:- 21</Text>
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
    height:250,
    width: 250,
    alignSelf: "center",
    marginBottom:10
  },
  text:{
    marginTop:10,
    fontSize:30,
    fontStyle:'italic',
    fontWeight:'bold',
    color:'white',
    borderWidth:3,
    borderColor:'darkblue',
    textAlign:'center'
  }
});
