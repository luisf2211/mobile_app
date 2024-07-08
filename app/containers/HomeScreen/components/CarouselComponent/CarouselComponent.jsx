import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
//  import Carousel from "react-native-snap-carousel";

function CarouselComponent({ data }) {
  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          paddingVertical: 25,
          paddingHorizontal: 15,
          width: "100%",
          height: 280,
          marginVertical: 10,
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "#171717",
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginLeft: 0,
        }}
      >
        <Image
          style={styles.picture}
          source={{
            uri: item.image,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#ED8B00",
            marginTop: 10,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontSize: 12,
            color: "black",
          }}
        >
          {item.text}
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontSize: 10,
            color: "grey",
          }}
        >
          {item.paragraph}
        </Text>
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

export default CarouselComponent;
