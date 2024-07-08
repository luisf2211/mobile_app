import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
//import Carousel from "react-native-snap-carousel";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import formatearMoneda from "../../../../utils/formatearMoneda";

function Cuentas({ data }) {
  const navigation = useNavigation();

  const navegarDetallesCuentas = (
    id,
    numeroCuenta,
    balance,
    fechaApertura,
    tarjetaAsociada,
    estado,
    transacciones
  ) => {
    navigation.navigate("detalles", {
      id: id,
      numeroCuenta: numeroCuenta,
      balance: balance,
      fechaApertura: fechaApertura,
      tarjetaAsociada: tarjetaAsociada,
      estado: estado,
      transacciones: transacciones
    });
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          paddingVertical: 20,
          paddingHorizontal: 15,
          width: "100%",
          height: 100,
          marginVertical: 10,
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "#171717",
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginLeft: 0,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#ED8B00",
                marginTop: 5,
              }}
            >
              Ahorros o Corriente / {item.numeroCuenta}
            </Text>
          </View>

          <View
            style={{
              //  borderWidth: 1,
              width: "20%",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#02729E" }}
              onPress={() =>
                navegarDetallesCuentas(
                  item.id,
                  item.numeroCuenta,
                  item.balance,
                  item.fechaApertura,
                  item.tarjetaAsociada,
                  item.estado,
                  item.transacciones
                )
              }
            >
              <MaterialCommunityIcons name="arrow-right-circle" size={26} />
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              //  borderWidth: 1,
              width: "50%",
            }}
          >
            <Text
              style={{
                marginTop: 12,
                paddingLeft: 1,
                fontSize: 15,
                color: "#02729E",
                fontWeight: "400",
              }}
            >
              Balance:
            </Text>
          </View>

          <View
            style={{
              //  borderWidth: 1,
              width: "55%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginTop: 15,
                fontSize: 12,
                color: "grey",
                fontWeight: "400",
              }}
            >
              {formatearMoneda(item.balance)}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.cuentasContenedor}>
        {/* <Carousel
          layout={"default"}
          sliderWidth={310}
          itemWidth={300}
          data={data}
          renderItem={_renderItem}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cuentasTitle: {
    alignItems: "left",
    justifyContent: "left",
    flexDirection: "row",
    marginLeft: 13,
    fontWeight: "bold",
  },
  cuentasContenedor: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  textHeader: {
    color: "#02729E",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  picture: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
});

export default Cuentas;
