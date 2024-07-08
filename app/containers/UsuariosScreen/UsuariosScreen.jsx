import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import BadgeComponent from "./Components/BadgeComponent/BadgeComponent";

function UsuariosScreen() {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              textAlign: "left",
              borderWidth: 0,
              borderColor: "red",
              margin: 15,
              color: "grey",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Perfil
          </Text>
        </View>
        <BadgeComponent
          editar={"Correo"}
          icon={"email"}
          nombreCompleto={"lfreyesbaez@test.com"}
          mostrarBoton={true}
          btnIcon={"pencil"}
        />
        <Text>{""}</Text>
        <BadgeComponent
          editar={"Telefono"}
          icon={"phone"}
          nombreCompleto={"+ 1 (829) 508 2211"}
          mostrarBoton={true}
          btnIcon={"pencil"}
        />
        <Text>{""}</Text>
        <BadgeComponent icon={"chat"} editar={"Redes sociales"} mostrarBoton={true} btnIcon={"arrow-right-circle"}/>
        <Text>{""}</Text>
        <Text>{""}</Text>

        <Text
          style={{
            textAlign: "left",
            borderWidth: 0,
            borderColor: "red",
            margin: 15,
            color: "grey",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Configuración
        </Text>
        <BadgeComponent
          editar={"Notificaciones"}
          icon={"bell"}
          mostrarToggle={true}
        />
        <Text>{""}</Text>
        <BadgeComponent
          editar={"Privacidad"}
          icon={"shield"}
          mostrarBoton={true}
          btnIcon={"arrow-right-circle"}
        />
        <Text>{""}</Text>
        <BadgeComponent
          editar={"Ayuda"}
          icon={"help-circle"}
          mostrarBoton={true}
          btnIcon={"arrow-right-circle"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
  },
  header: {
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default UsuariosScreen;
