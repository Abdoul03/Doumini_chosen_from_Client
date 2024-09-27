import { View, Text } from "react-native";
import React from "react";
import { featured } from "../constants";
import { useNavigation } from "@react-navigation/native";

const DeliveryScreen = () => {
  const restaurant = featured.restaurants[1];
  const navigation = useNavigation;
  return <View className="flex-1">{/* Carte */}</View>;
};

export default DeliveryScreen;
