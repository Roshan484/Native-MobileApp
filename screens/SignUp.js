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

const SignUp = ({ navigation }) => {
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
        <View className=" mt-3 mx-5">
          <View className="pb-5">
            <Text className="font-bold text-2xl">Sign Up</Text>
          </View>
          <View>
            <Text className="font-medium text-base pl-2">Username</Text>
            <TextInput className="w-full p-2 border border-gray-500 rounded-full bg-gray-300" />
          </View>
          <View className="mt-5">
            <Text className="font-medium text-base pl-2">Email Address</Text>
            <TextInput className="w-full p-2 border border-gray-500 rounded-full bg-gray-300" />
          </View>

          <View className="mt-5">
            <Text className="font-medium text-base pl-2">Password</Text>
            <TextInput
              className="w-full p-2 border border-gray-500 rounded-full bg-gray-300"
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={true}
            />
          </View>
          <View className="items-center">
            <TouchableOpacity
              activeOpacity={0.6}
              className="bg-orange-600 p-3 rounded-full  items-center mt-10 w-52"
            >
              <Text className="text-white font-medium">Create Account</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-5 items-center flex-row justify-center">
            <Text>Already have an account?</Text>
            <TouchableOpacity
              activeOpacity={0.3}
              className="pl-1"
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="text-blue-600">Sign In</Text>
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

export default SignUp;
