import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("GetStarted");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View className="flex  items-center justify-center h-full">
      <Image source={require("../assets/logo.png")} />
      <Text className="pt-5 font-medium">Loading...</Text>
    </View>
  );
};

export default Splash;
