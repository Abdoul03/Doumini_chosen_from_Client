import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
// import * as Icon from "react-native-feather";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Cart = () => {
    const navigation = useNavigation();
    return (
      <View className="absolute   left-50 z-50">
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
        >
                <View
          style={{ backgroundColor: themeColors.bgColor(1), flex:1, justifyContent:"flex-end",alignItems:"flex-end" }}
          className="p-3 rounded-full"
        >
            <Icon name="shopping-cart" size={50} color="#fff" strokeWidth={2.5}
            
            />
          {/* <Icon.shopping-cart
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          /> */}
        </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Cart;
