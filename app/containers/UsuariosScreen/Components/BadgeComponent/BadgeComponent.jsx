import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function BadgeComponent({
  editar,
  nombreCompleto,
  icon,
  mostrarBoton,
  mostrarToggle,
  btnIcon,
}) {
  const [toggleValue, setToggleValue] = useState(true);

  const handleToggle = () => {
    setToggleValue(!toggleValue);
  };
  return (
    <View>
      <View style={styles.cuentasContenedor}>
        <View style={styles.bannerBox}>
          <View
            style={{
              flexDirection: "row",
              padding: "6%",
            }}
          >
            <View
              style={{
                width: "40%",
                alignItems: "left",
              }}
            >
              <Text style={styles.titleBanner}>
                <MaterialCommunityIcons name={icon} size={14} /> {editar}
              </Text>
            </View>

            <View
              style={{
                width: "60%",
              }}
            >
              <Text style={[styles.paragraphBanner, { textAlign: "right" }]}>
                {" "}
                {nombreCompleto}{" "}
                {mostrarBoton ? (
                  <Text>
                    {" "}
                    <MaterialCommunityIcons name={btnIcon} size={20} />
                  </Text>
                ) : mostrarToggle ? (
                  <View>
                    <Switch
                      value={toggleValue}
                      onValueChange={handleToggle}
                      style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
                      trackColor={{ false: "#767577", true: "#ED8B00" }}
                      thumbColor={toggleValue ? "#fff" : "#fff"}
                    />
                    <Text> </Text>
                    <Text> </Text>
                  </View>
                ) : (
                  ""
                )}
              </Text>
            </View>
          </View>
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
    width: "95%",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: "auto",
    height: 66,
  },
  titleBanner: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ED8B00",
  },
  paragraphBanner: {
    fontSize: 11,
    fontWeight: "300",
    color: "grey",
  },
  picture: {
    width: "100%",
    height: 100,
  },
});

export default BadgeComponent;
