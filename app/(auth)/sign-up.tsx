import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { createUser } from "@/lib/appwrite";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    const { name, email, password } = form;
    if (!name || !email || !password)
      return Alert.alert(
        "Error",
        "Please enter a valid name, email address & password."
      );

    setIsSubmitting(true);

    try {
      await createUser({
        email,
        name,
        password,
      });

      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Jhon Doe"
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        label="Name"
      />

      <CustomInput
        placeholder="example@gmail.com"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />

      <CustomInput
        placeholder="Create your password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label="Password"
        secureTextEntry={true}
      />

      <CustomButton title="Sign Up" isLoading={isSubmitting} onPress={submit} />

      <View className="flex justify-center mt-2 flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Already have an account?
        </Text>
        <Link href={"/sign-in"} className="base-bold text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
