import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import useAuthStore from "@/store/auth.store";
import { router } from "expo-router";
import { deleteSession } from "@/lib/appwrite";

type ItemProfileProps = {
  title: string;
  value: string;
  icon: ImageSourcePropType;
};

const ItemProfile = ({ title, value, icon }: ItemProfileProps) => {
  return (
    <View className="flex flex-row gap-4 px-5">
      <View className="flex items-center size-12 bg-primary/5 rounded-full justify-center">
        <Image source={icon} className="size-5" resizeMode="contain" />
      </View>

      <View className="flex flex-col gap-0">
        <Text className="text-sm text-gray-400">{title}</Text>
        <Text className="text-base text-dark-100">{value}</Text>
      </View>
    </View>
  );
};

const Profile = () => {
  const { user } = useAuthStore();

  if (!user) router.push("/sign-in");

  const logout = async () => {
    await deleteSession();

    router.push("/sign-in");
  }

  return (
    <SafeAreaView className="bg-white h-full flex flex-col gap-8 px-5">
      <View className="flex items-center justify-start gap-8">
        <Text className="base-bold text-dark-100">Profile</Text>
        <Image
          source={{ uri: user?.avatar }}
          className="size-[100px] rounded-full"
          resizeMode="contain"
        />
      </View>

      <ItemProfile title="Name" value={user!.name} icon={images.user} />

      <ItemProfile title="Email" value={user!.email} icon={images.envelope} />

      <ItemProfile
        title="Phone number"
        value={"+1 234 567 890"}
        icon={images.phone}
      />

      <ItemProfile
        title="Address"
        value={"123 Main Street, Springfield, IL 62704"}
        icon={images.location}
      />

      <TouchableOpacity 
        onPress={logout}
        className="flex flex-row items-center justify-center gap-2 mt-10 border border-red-600 bg-red-100/50 w-full h-[48px] rounded-full">
        <Image source={images.logout} className="size-6" resizeMode="contain" />
        <Text className="text-red-600 font-semibold text-base">Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
