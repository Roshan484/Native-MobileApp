import { View, Text } from "react-native";
import React from "react";
import { UserCircleIcon } from "react-native-heroicons/solid";

export default function Top() {
  return (
    <View className="pt-2">
      <UserCircleIcon size={43} color="#808080" />
    </View>
  );
}
