import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import WelcomeScreen from "./index";
import AddPatientScreen from "./addPatient";

const Stack = createStackNavigator();
import "../global.css"


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: "Hospital Manager" }} />
        <Stack.Screen name="add-patient" component={AddPatientScreen} options={{ title: "Add Patient" }} />
        <Stack.Screen
          name="patients"
          component={() => <View className="flex-1 items-center justify-center"><Text>Patients Screen</Text></View>}
          options={{ title: "Patients" }}
        />
        <Stack.Screen
          name="appointments"
          component={() => <View className="flex-1 items-center justify-center"><Text>Appointments Screen</Text></View>}
          options={{ title: "Appointments" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}