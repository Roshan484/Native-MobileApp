import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const LoginOptions = () => {
  return (
    <View className="flex-row gap-12 items-center justify-center pt-5 ">
      <TouchableOpacity activeOpacity={0.3}>
        <Image source={require("../assets/Facebook.png")} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.3}>
        <Image source={require("../assets/Google.png")} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.3}>
        <Image source={require("../assets/Instagram.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default LoginOptions;
