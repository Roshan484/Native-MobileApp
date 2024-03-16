import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Cup from "../components/Cup";
import Beans from "../components/Beans";
import LoginOptions from "../components/LoginOptions";

const LogIn = ({ navigation }) => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="absolute top-16 left-3">
          <Beans />
        </View>
        <View className=" flex justify-center items-center mt-20">
          <Image source={require("../assets/logo.png")} />
        </View>
        <View className="mx-5">
          <View className="pb-5">
            <Text className="font-bold text-2xl">Log In</Text>
          </View>
          <View>
            <Text className="font-medium text-base pl-2">Username</Text>
            <TextInput className="w-full p-2 border border-gray-500 rounded-full bg-gray-300" />
          </View>

          <View className="mt-3">
            <Text className="font-medium text-base pl-2">Password</Text>
            <TextInput
              className="w-full p-2 border border-gray-500 rounded-full bg-gray-300"
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={true}
            />
            <TouchableOpacity activeOpacity={0.6} className="pl-2 pt-4">
              <Text className="text-red-600">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View className="items-center mt-6">
            <TouchableOpacity
              className="bg-orange-600 p-3 rounded-full  items-center w-52"
              onPress={() => navigation.navigate("Home")}
            >
              <Text className="text-white font-medium">Log In</Text>
            </TouchableOpacity>
          </View>

          <View className="pt-5 ">
            <Text className="text-center font-medium text-gray-500 text-base">
              Or
            </Text>
            <LoginOptions />
          </View>

          <View className="pt-6 items-center flex-row justify-center">
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              activeOpacity={0.3}
              className="pl-1 "
              onPress={() => navigation.navigate("Signup")}
            >
              <Text className="text-blue-600">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View className="relative">
        <Cup />
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
