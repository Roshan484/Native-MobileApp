import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const SignUp = ({ navigation }) => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  return (
    <SafeAreaView>
      <View className="absolute top-16 left-3">
        <Image source={require("../assets/Beans.png")} tintColor="#AEAEAE" />
      </View>
      <View className=" flex justify-center items-center mt-20">
        <Image source={require("../assets/logo.png")} />
      </View>
      <View className=" mt-10 mx-5">
        <View className="pb-5">
          <Text className="font-bold text-3xl">Sign Up</Text>
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
          <TouchableOpacity className="bg-orange-600 p-3 rounded-full  items-center mt-10 w-52">
            <Text className="text-white font-medium">Create Account</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-5 items-center flex-row justify-center">
          <Text>Already have an account?</Text>
          <TouchableOpacity
            className="pl-1 "
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-blue-500">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
