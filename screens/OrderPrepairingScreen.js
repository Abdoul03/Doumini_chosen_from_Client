import { View, Text, Image } from "react-native";
import React from "react";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const OrderPrepairingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      {/* <Image source={require("")} className="h-80 w-80" /> */}
    </View>
  );
};

export default OrderPrepairingScreen;
