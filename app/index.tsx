import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRouter } from "expo-router";
import "../global.css";

type RootStackParamList = {
  addPatient: undefined;
  patients: undefined;
  appointments: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const WelcomeScreen = () => {
  const router = useRouter();
  const navigation = useNavigation<NavigationProp>(); 

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center p-8 bg-gradient-to-b from-blue-50 to-white">
        {/* Hospital Icon */}
        <View className="mb-8">
          <View className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <MaterialIcons name="local-hospital" size={48} color="#fff" />
          </View>
        </View>

        {/* Title */}
        <View className="text-center mb-12">
          <Text className="text-3xl font-bold text-gray-900 mb-2">
            Hospital Manager
          </Text>
          <Text className="text-lg text-gray-600">
            Manage patients and appointments
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="w-full space-y-4">

          <Button
            title="Add Patient"
            icon={<MaterialIcons name="add" size={24} color="#fff" style={{ marginRight: 12 }} />}
            buttonStyle={{
              backgroundColor: "#2563eb",
              borderRadius: 8,
              height: 64,
              justifyContent: "center",
            }}
            titleStyle={{ fontSize: 18, fontWeight: "600" }}
            onPress={() => router.push({ pathname: "/addPatient" })}
            containerStyle={{ borderRadius: 8 }}
          />

          <Button
            title="Patients"
            icon={<FontAwesome5 name="users" size={24} color="#2563eb" style={{ marginRight: 12 }} />}
            type="outline"
            buttonStyle={{
              borderColor: "#2563eb",
              borderWidth: 2,
              borderRadius: 8,
              height: 64,
              justifyContent: "center",
            }}
            titleStyle={{
              fontSize: 18,
              fontWeight: "600",
              color: "#2563eb",
            }}
            onPress={() => navigation.navigate("patients")}
            containerStyle={{ borderRadius: 8 }}
          />

          <Button
            title="Appointments"
            icon={<Ionicons name="calendar" size={24} color="#2563eb" style={{ marginRight: 12 }} />}
            type="outline"
            buttonStyle={{
              borderColor: "#2563eb",
              borderWidth: 2,
              borderRadius: 8,
              height: 64,
              justifyContent: "center",
            }}
            titleStyle={{
              fontSize: 18,
              fontWeight: "600",
              color: "#2563eb",
            }}
            onPress={() => navigation.navigate("appointments")}
            containerStyle={{ borderRadius: 8 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;