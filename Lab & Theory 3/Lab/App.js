import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./stack_screens/home";
import About from "./stack_screens/about";
import SignIn from "./stack_screens/Signin";
import SignUp from "./stack_screens/SignUp";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UI"
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTitleAlign:'center',
          headerTitleStyle: {color:'white',fontSize:24,fontWeight:'bold'},
        }}
      >
        <Stack.Screen name="Sign In" component={SignIn}></Stack.Screen>
        <Stack.Screen name="Sign up" component={SignUp}></Stack.Screen>
        <Stack.Screen name="My Profile" component={About}></Stack.Screen>
        <Stack.Screen name="Welcome to Home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
