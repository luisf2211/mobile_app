import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

function BannerComponent() {
  return (
    <View>
      <View style={styles.cuentasContenedor}>
        <View style={styles.bannerBox}>
      <TouchableHighlight>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={{ 
                width: "65%" ,
                padding: 10
            }}
                >
              <Text style={styles.titleBanner}>Crea tu cuenta digital libre</Text>
              <Text style={styles.paragraphBanner}>
                Todas tus transacciones a través de nuestros canales digitales
                con 0 comisiones.
              </Text>

              <View
                style={{
                  marginTop: 2,
                  alignItems: "center",
                }}
              >
              </View>
            </View>
            <View
              style={{
                width: "30%",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.picture}
                source={{
                  uri: "https://popularenlinea.com/SiteCollectionImages/personas/cuentas/iconos/0porciento.webp",
                }}
              />
            </View>
          </View>
        </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cuentasContenedor: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  bannerBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 120,
    width: "95%",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 10,
  },
  titleBanner: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ED8B00",
    marginTop: 10  ,
  },
  paragraphBanner: {
    fontSize: 10,
    fontWeight: "300",
    color: "grey",
    width: 200,
    marginTop: 15,

  },
  picture: {
    width: "100%",
    height: 100,
  },
});

export default BannerComponent;
