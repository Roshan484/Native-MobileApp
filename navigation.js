import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import GetStarted from "./screens/GetStarted";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import Splash from "./screens/Splash";

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
