import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/containers/HomeScreen/HomeScreen";
import UsuariosScreen from "./app/containers/UsuariosScreen/UsuariosScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetallesCuentasComponent from "./app/containers/HomeScreen/components/DetalleCuentasComponent/DetallesCuentaComponent";
import HistoricoTransaccionesComponent from "./app/containers/HomeScreen/components/HistoricoTransaccionesComponent/HistoricoTransaccionesComponent";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#fff", // Color del tab
          borderTopWidth: 0.1,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#ED8B00",
        }}
      />
      <Tab.Screen
        name="Usuarios"
        component={UsuariosScreen}
        options={{
          tabBarLabel: "Mi Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
          tabBarActiveTintColor: "#ED8B00",
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={TabNavigator}
        options={{
          title: "Inicio",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detalles"
        component={DetallesCuentasComponent}
        options={{
          title: "Detalles",
          headerTintColor: "#FFF",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#ED8B00",
          },
        }}
      />
      <Stack.Screen
        name="HistoricoTransacciones"
        component={HistoricoTransaccionesComponent}
        options={{
          title: "Historial Transsaciones",
          headerTintColor: "#FFF",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#ED8B00",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar color={"black"} />
      <StackNavigator />
    </NavigationContainer>
  );
}
