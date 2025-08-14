import React from "react";
import { View, Text } from "react-native";
import { Button, Card } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, FontAwesome5, Ionicons} from "@expo/vector-icons";

interface WelcomeScreenProps {
  onNavigate: (screen: "add-patient" | "patients" | "appointments") => void;
}

const WelcomeScreen = ({ onNavigate }: WelcomeScreenProps) => {
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
          <Text className="text-3xl font-bold text-gray-900 mb-2">Hospital Manager</Text>
          <Text className="text-lg text-gray-600">Manage patients and appointments</Text>
        </View>

        {/* Action Buttons */}
        <View className="w-full space-y-4">
          <Card containerStyle={{ padding: 4, borderRadius: 8, shadowOpacity: 0.2 }}>
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
              onPress={() => onNavigate("add-patient")}
              containerStyle={{ borderRadius: 8 }}
            />
          </Card>

          <Card containerStyle={{ padding: 4, borderRadius: 8, shadowOpacity: 0.2 }}>
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
              titleStyle={{ fontSize: 18, fontWeight: "600", color: "#2563eb" }}
              onPress={() => onNavigate("patients")}
              containerStyle={{ borderRadius: 8 }}
            />
          </Card>

          <Card containerStyle={{ padding: 4, borderRadius: 8, shadowOpacity: 0.2 }}>
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
              titleStyle={{ fontSize: 18, fontWeight: "600", color: "#2563eb" }}
              onPress={() => onNavigate("appointments")}
              containerStyle={{ borderRadius: 8 }}
            />
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;