import { useRoute, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { Clipboard } from "react-native";
import { Alert } from "react-native";
import { useEffect, useState } from "react";
import formatearFecha from "../../../../utils/formatearFecha";
import formatearMoneda from "../../../../utils/formatearMoneda";

function DetallesCuentasComponent() {
  
  const route = useRoute();
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const navigation = useNavigation();
  const [habilitarBotonBuscar, setHabilitarBotonBuscar] = useState(false);

  useEffect(() => {
    if (fechaInicio.length > 9 && fechaFin.length > 9) {
      setHabilitarBotonBuscar(true)
    } else {
      setHabilitarBotonBuscar(false)
    }
  }, [fechaInicio, fechaFin]);

  const { numeroCuenta, balance, fechaApertura, tarjetaAsociada, estado, transacciones } = route.params;

  const handleFechaInicio = (input) => {
    const fechaFormateada = formatearFecha(input);
    setFechaInicio(fechaFormateada);
  };

  const handleFechaFin = (input) => {
    const fechaFormateada = formatearFecha(input);
    setFechaFin(fechaFormateada);
  };

  const handleNavegarHistorico = () => {
    navigation.navigate("HistoricoTransacciones", {
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      transacciones: transacciones
    });
  };

  const portaPapeles = (data) => {
    Alert.alert("Texto copiado"); // TODO: colocar algun estilo una vez el usuario copie del portapapeles
    Clipboard.setString(data);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        keyboardVerticalOffset={135}
        behavior={"position"}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.boxShadow}>
            <View style={styles.CuentaContainer}>
              <Text style={styles.subTituloCuenta}>
                Ahorros o Cuenta Digital
              </Text>
              <Text>{""}</Text>
              <Text style={styles.tituloCuenta}>
                <View>
                  <Text
                    style={styles.tituloCuenta}
                    onPress={() => portaPapeles(numeroCuenta)}
                  >
                    {numeroCuenta}
                  </Text>
                </View>
              </Text>
            </View>

            <View style={styles.CuentaContainer}>
              <Text style={styles.subTituloCuenta}>Balance Disponible</Text>
              <Text>{""}</Text>
              <Text style={[styles.tituloCuenta]}>
                {formatearMoneda(balance)} 
              </Text>
            </View>
          </View>

          <View style={[styles.boxShadow, { height: "32%" }]}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ borderWidth: 0, width: "50%" }}>
                <Text style={styles.subTituloCuenta}>Balance total</Text>
                <Text> </Text>
                <Text style={[styles.subTituloCuenta, { fontWeight: "800" }]}>
                  {formatearMoneda(balance)}{" "}
                </Text>
              </View>

              <View style={{ borderWidth: 0, width: "50%" }}>
                <Text
                  style={[styles.subTituloCuenta, { alignSelf: "flex-end" }]}
                >
                  Fecha de apertura
                </Text>
                <Text> </Text>
                <Text
                  style={[
                    styles.subTituloCuenta,
                    { alignSelf: "flex-end", fontWeight: "800" },
                  ]}
                >
                  {fechaApertura}
                </Text>
              </View>
            </View>
            <Text style={{ margin: 20 }} />
            <View style={{ flexDirection: "row" }}>
              <View style={{ borderWidth: 0, width: "50%" }}>
                <Text style={styles.subTituloCuenta}>Tarjeta asociada</Text>
                <Text> </Text>
                <Text style={[styles.subTituloCuenta, { fontWeight: "800" }]}>
                  {tarjetaAsociada}
                </Text>
              </View>

              <View style={{ borderWidth: 0, width: "50%" }}>
                <Text
                  style={[styles.subTituloCuenta, { alignSelf: "flex-end" }]}
                >
                  Estado
                </Text>
                <Text> </Text>
                <Text
                  style={[
                    styles.subTituloCuenta,
                    { alignSelf: "flex-end", fontWeight: "800" },
                  ]}
                >
                  {estado}
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.boxShadow, { height: "33%" }]}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.subTituloCuenta}>
                Historial de transacciones
              </Text>
            </View>
            <Text></Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ borderWidth: 0, width: "50%" }}>
                <Text style={styles.subTituloCuenta}>Fecha de inicio</Text>
                <Text> </Text>
                <TextInput
                  style={{
                    borderColor: "grey",
                    borderWidth: 0.7,
                    borderRadius: 8,
                    padding: 10,
                    width: "90%",
                    height: "40%",
                    textAlign: "center",
                  }}
                  onChangeText={handleFechaInicio}
                  value={fechaInicio}
                  placeholder="MM/DD/AAAA"
                  keyboardType="numeric"
                />
              </View>

              <View style={{ borderWidth: 0, width: "50%" }}>
                <Text
                  style={[styles.subTituloCuenta, { alignSelf: "flex-end" }]}
                >
                  Fecha de fin
                </Text>
                <Text> </Text>
                <TextInput
                  style={{
                    borderColor: "grey",
                    borderWidth: 0.7,
                    borderRadius: 8,
                    padding: 10,
                    width: "90%",
                    height: "40%",
                    textAlign: "center",
                    alignSelf: "flex-end",
                  }}
                  onChangeText={handleFechaFin}
                  value={fechaFin}
                  placeholder="MM/DD/AAAA"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <Pressable
                disabled={habilitarBotonBuscar ? !habilitarBotonBuscar : !habilitarBotonBuscar}
                onPress={handleNavegarHistorico}
                style={
                  habilitarBotonBuscar
                    ? styles.btnBuscar
                    : styles.btnBuscarDeshabilitado
                }
              >
                <Text
                  style={[
                    styles.subTituloCuenta,
                    { color: "white", fontWeight: "bold", fontSize: 16 },
                  ]}
                >
                  Buscar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  CuentaContainer: {
    marginTop: 5,
    padding: 5,
    paddingLeft: 15,
    borderWidth: 0,
    alignItems: "center",
  },
  tituloCuenta: {
    color: "grey",
    fontSize: 20,
    fontWeight: "800",
  },
  subTituloCuenta: {
    color: "grey",
    fontSize: 14,
    fontWeight: "600",
  },
  boxShadow: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "90%",
    /* height: "50%", */
    marginVertical: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginLeft: 0,
  },
  btnBuscar: {
    borderWidth: 0,
    borderColor: "red",
    width: 200,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#ED8B00",
    transition: 'opacity 0.3s',
  },
  btnBuscarDeshabilitado: {
    borderWidth: 0,
    borderColor: "red",
    width: 200,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#CCCCCC", // Gris claro
    transition: 'opacity 0.3s',
    opacity: 0.7, // Opacidad reducida para indicar deshabilitación
    // Otros estilos que desees aplicar al botón deshabilitado
  },
});

export default DetallesCuentasComponent;
