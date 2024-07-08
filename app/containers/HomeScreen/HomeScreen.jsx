import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import BannerComponent from "./components/BannerComponent/BannerComponent";
import CarouselComponent from "./components/CarouselComponent/CarouselComponent";
import Cuentas from "./components/Cuentas/Cuentas";
import NoticiasData from "../../services/Data/Noticias.json";
import CuentasData from "../../services/Data/Cuentas.json";
import UsuarioData from "../../services/Data/Usuario.json";

function HomeScreen() {
  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.textHeader}> Hola, {`${UsuarioData.primerNombre} ${UsuarioData.primerApellido}`} </Text>
        </View>

        <View style={styles.contenedorApp}>
          <Cuentas data={CuentasData} />
        </View>


        <View style={styles.contenedorApp}>
          <BannerComponent />
        </View>

        <View style={styles.contenedorApp}>
          <CarouselComponent data={NoticiasData} />
        </View>

        <View
          style={{
            padding: 50,
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 80,
    padding: 5,
    paddingLeft: 15,
  },
  textHeader: {
    color: "#02729E",
    fontSize: 20,
    fontWeight: "550",
  },
  contenedorApp: {
    marginTop: 10,
    padding: 5,
  },
});

export default HomeScreen;
