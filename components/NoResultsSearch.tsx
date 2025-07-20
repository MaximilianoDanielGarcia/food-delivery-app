import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

const NoResultsSearch = () => {
  return (
    <View className="flex-1 items-center justify-center gap-4 px-5">
      <Image
        source={images.emptyState}
        className="w-full h-[128px]"
        resizeMode="contain"
      />
      <Text className="text-xl font-semibold text-dark-100">Nothing matched your search</Text>
      <Text className="body-regular text-gray-200">Try a different search term or check for typos.</Text>
    </View>
  );
};

export default NoResultsSearch;
