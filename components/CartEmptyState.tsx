import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "@/constants";
import { router } from "expo-router";

const CartEmptyState = () => {
  return (
    <View className="flex-1 items-center justify-center gap-4 px-5">
      <Image
        source={images.logo}
        className="w-full h-[128px]"
        resizeMode="contain"
      />
      <Text className="text-xl font-semibold text-dark-100">
        Your cart is still empty.
      </Text>
      <Text className="body-regular text-base text-gray-200">
        Start adding delicious items to your order!
      </Text>

      <TouchableOpacity 
        onPress={() => router.push(
            "/search")}
        className="h-[48px] px-6 py-2 bg-primary rounded-full flex-row items-center justify-center gap-2">
        <Text className="text-white font-semibold">Search for items</Text>
        <Image source={images.search} className="size-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default CartEmptyState;
