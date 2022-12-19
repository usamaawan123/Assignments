import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function SignUp({ navigation }) {
  const Clickme = () => {
    navigation.navigate("Welcome to Home");
  }
  const SignIN = () => {
    navigation.navigate("Sign In");
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")}></Image>
      <Text style={{ color: "white" }}>Welcome To</Text>
      <Text style={styles.text1}>OctoBox</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor={"white"}
        underlineColorAndroid={"black"}
        keyboardType="default"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"white"}
        underlineColorAndroid={"black"}
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"white"}
        underlineColorAndroid={"black"}
        secureTextEntry={true}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={"white"}
        underlineColorAndroid={"black"}
        secureTextEntry={true}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={Clickme}>
        <Text style={styles.text2}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={{ color: "white" }}>
        Already a member?
        <TouchableOpacity onPress={SignIN}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          SIGN IN--{">"}
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
    margin: 60,
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
    margin: 15,
    paddingLeft:10,
    height: 60,
    width: 300,
    color: "white",
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "black",
  },
  button: {
    margin: 10,
    height: 40,
    width: 300,
    backgroundColor: "blue",
  },
});
