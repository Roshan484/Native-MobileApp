import React from "react";
import { Image } from "react-native";

const Cup = () => {
  return (
    <Image
      source={require("../assets/Cup.png")}
      className="absolute right-3 "
    />
  );
};

export default Cup;
