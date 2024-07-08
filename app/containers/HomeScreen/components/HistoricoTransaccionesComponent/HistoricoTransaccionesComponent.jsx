import { useRoute } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import formatearMoneda from "../../../../utils/formatearMoneda";

function HistoricoTransaccionesComponent() {
  const route = useRoute();
  const { fechaInicio, fechaFin, transacciones } = route.params;

  const parseFecha = (dateString) => {
    const [month, day, year] = dateString.split("/");
    return new Date(year, month - 1, day);
  };

  const fechaInicioFormateada = parseFecha(fechaInicio);
  const fechaFinFormateada = parseFecha(fechaFin);

  const resultadoTransacciones = transacciones.filter((transaccion) => {
    const fechaTransaccion = parseFecha(transaccion.fechaTransaccion);
    if (
      fechaTransaccion >= fechaInicioFormateada &&
      fechaTransaccion <= fechaFinFormateada
    ) {
      return transaccion;
    }
  });

  return (
    <View>
      <View style={[{ alignItems: "", borderColor: "red", borderWidth: 0 }]}>
        <View
          style={{
            padding: 15,
          }}
        >
          <Text
            style={[styles.tituloCuenta, { fontSize: 20, fontWeight: 400 }]}
          >
            Transacciones realizadas
          </Text>
        </View>
        <View
          style={{
            padding: 15,
            flexDirection: "row",
          }}
        >
          <View style={{ bordercolor: "red", borderWidth: 0, width: "50%" }}>
            <Text
              style={[styles.tituloCuenta, { fontSize: 16, fontWeight: 400 }]}
            >
              Desde: {fechaInicio}
            </Text>
          </View>
          <Text></Text>
          <View style={{ bordercolor: "red", borderWidth: 0, width: "50%" }}>
            <Text
              style={[
                styles.tituloCuenta,
                { fontSize: 16, textAlign: "right", fontWeight: 400 },
              ]}
            >
              Hasta: {fechaFin}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ borderWidth: 0, borderColor: "red", height: "85%" }}>
        <ScrollView>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            keyboardVerticalOffset={120}
            behavior={"position"}
          >
            <View style={{ marginTop: 20 }}></View>
            {resultadoTransacciones.length > 0 ? (
              resultadoTransacciones.map((transaccion, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      padding: 20,
                    }}
                  >
                    <View style={styles.boxShadow}>
                      <Text style={[styles.tituloCuenta, { fontWeight: 300 }]}>
                        {transaccion.comercio}
                      </Text>
                      <Text></Text>
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "50%" }}>
                          <Text
                            style={[
                              styles.subTituloCuenta,
                              { textAlign: "left" },
                            ]}
                          >
                            {transaccion.fechaTransaccion}
                          </Text>
                        </View>
                        <View style={{ width: "50%" }}>
                          <Text
                            style={[
                              styles.subTituloCuenta,
                              { textAlign: "right" },
                            ]}
                          >
                            {formatearMoneda(transaccion.monto)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })
            ) : (
              <View
                style={{
                  padding: 15,
                  width: "100%",
                  marginTop: 50,
                }}
              >
                <Text
                  style={[
                    styles.subTituloCuenta,
                    {
                      textAlign: "center",
                      width: "100%",
                      fontSize: 15,
                      fontWeight: 300,
                    },
                  ]}
                >
                  {" "}
                  Parece que no tienes transacciones para las fechas
                  seleccionadas{" "}
                </Text>
              </View>
            )}
            {/* <View style={{marginBottom: '0%'}} /> */}
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
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
    width: "auto",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default HistoricoTransaccionesComponent;
