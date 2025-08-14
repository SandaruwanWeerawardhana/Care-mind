import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert } from "react-native";
import { Button, Card } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "../global.css";

interface Patient {
  id: string;
  name: string;
  age: string;
  condition: string;
}

const AddPatientScreen = ({ navigation }: any) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  
  useEffect(() => {
    const loadPatients = async () => {
      try {
        const storedPatients = await AsyncStorage.getItem("patients");
        if (storedPatients) {
          setPatients(JSON.parse(storedPatients));
        }
      } catch (error) {
        console.error("Error loading patients:", error);
      }
    };
    loadPatients();
  }, []);

  
  const savePatients = async (updatedPatients: Patient[]) => {
    try {
      await AsyncStorage.setItem("patients", JSON.stringify(updatedPatients));
      setPatients(updatedPatients);
    } catch (error) {
      console.error("Error saving patients:", error);
    }
  };

  
  const handleSave = () => {
    if (!name || !age || !condition) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (editingId) {
      
      const updatedPatients = patients.map((patient) =>
        patient.id === editingId ? { ...patient, name, age, condition } : patient
      );
      savePatients(updatedPatients);
      setEditingId(null);
    } else {
      
      const newPatient: Patient = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        age,
        condition,
      };
      savePatients([...patients, newPatient]);
    }

    setName("");
    setAge("");
    setCondition("");
  };

  
  const handleEdit = (patient: Patient) => {
    setName(patient.name);
    setAge(patient.age);
    setCondition(patient.condition);
    setEditingId(patient.id);
  };

  
  const handleDelete = (id: string) => {
    Alert.alert("Confirm Delete", "Are you sure you want to delete this patient?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          const updatedPatients = patients.filter((patient) => patient.id !== id);
          savePatients(updatedPatients);
        },
      },
    ]);
  };

  
  const renderPatient = ({ item }: { item: Patient }) => (
    <Card containerStyle={{ padding: 12, borderRadius: 8, shadowOpacity: 0.2 }}>
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-lg font-semibold text-gray-900">{item.name}</Text>
          <Text className="text-sm text-gray-600">Age: {item.age}</Text>
          <Text className="text-sm text-gray-600">Condition: {item.condition}</Text>
        </View>
        <View className="flex-row space-x-2">
          <TouchableOpacity onPress={() => handleEdit(item)} className="p-2">
            <MaterialIcons name="edit" size={24} color="#2563eb" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)} className="p-2">
            <MaterialIcons name="delete" size={24} color="#dc2626" />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="p-4">
        {/* Form */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-gray-900 mb-4">
            {editingId ? "Edit Patient" : "Add Patient"}
          </Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3 mb-4 bg-white"
            placeholder="Patient Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            className="border border-gray-300 rounded-lg p-3 mb-4 bg-white"
            placeholder="Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
          <TextInput
            className="border border-gray-300 rounded-lg p-3 mb-4 bg-white"
            placeholder="Medical Condition"
            value={condition}
            onChangeText={setCondition}
          />
          <Button
            title={editingId ? "Update Patient" : "Add Patient"}
            buttonStyle={{
              backgroundColor: "#2563eb",
              borderRadius: 8,
              paddingVertical: 12,
            }}
            titleStyle={{ fontSize: 16, fontWeight: "600" }}
            onPress={handleSave}
            containerStyle={{ borderRadius: 8 }}
          />
        </View>

        {/* Patient List */}
        <Text className="text-xl font-semibold text-gray-900 mb-4">Patients</Text>
        <FlatList
          data={patients}
          renderItem={renderPatient}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text className="text-gray-600 text-center">No patients added yet</Text>}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddPatientScreen;