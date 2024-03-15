import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const GetStarted = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="h-full">
        <View className="absolute bg-black/5 w-[600px] h-[600px] -translate-y-96 -translate-x-52 rounded-full "></View>
        <View className="flex items-center justify-center  h-full">
          <Image source={require("../assets/Group.png")} />
          <View className="mt-16">
            <Text className="text-black text-xl text-center font-medium  mx-7">
              Awaken Your Senses, Sip by Sip Welcome to Steamy Bean Café
            </Text>
          </View>
          <TouchableOpacity
            className="bg-orange-600 p-3 rounded-full  flex items-center justify-end mt-10 w-48"
            onPress={() => navigation.navigate("Signup")}
          >
            <View className="">
              <Text className="text-white font-medium">Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="absolute bg-black/5 w-[400px] h-[400px] bottom-0 translate-y-56  rounded-full "></View>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
