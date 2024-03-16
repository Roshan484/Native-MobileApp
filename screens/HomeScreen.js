import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Bottom from "../components/Home/BottomItems/Bottom";
import Top from "../components/Home/TopItems/Top";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="p-2 justify-end flex-row px-5">
          <Top />
        </View>
      </ScrollView>
      <View className="absolute w-full bottom-0">
        <Bottom />
      </View>
    </SafeAreaView>
  );
}
