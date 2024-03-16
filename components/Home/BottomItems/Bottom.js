import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  HomeIcon,
  HeartIcon,
  BookmarkIcon,
  UserCircleIcon,
} from "react-native-heroicons/solid";

const Bottom = () => {
  return (
    <View className="">
      <View className="bg-orange-500 w-full p-4 flex-row items-center justify-around">
        <TouchableOpacity activeOpacity={0.4}>
          <HomeIcon size={35} color="#F1DAB8" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4}>
          <HeartIcon size={35} color="#F1DAB8" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4}>
          <BookmarkIcon size={35} color="#F1DAB8" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4}>
          <UserCircleIcon size={35} color="#F1DAB8" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bottom;
