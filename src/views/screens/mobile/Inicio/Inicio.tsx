import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./Inicio.styles";

const logo = require("@/assets/icons/logo-blue.png");
const logoBlack = require("@/assets/icons/logo-black.png");
import TextBanner from "@/views/components/TextBanner/TextBanner";
import InicioMenu from "@/views/components/InicioMenu/InicioMenu";

const items = [
  { text: "¡Bienvenidos a nuestra tienda!", image: logo },
  { text: "Ofertas especiales hasta 50% de descuento", image: logo },
  { text: "Envío gratis en compras mayores a $50", image: logo },
];

export default function Inicio() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}> 
        <Image 
            source={ logoBlack } 
            style={styles.image}
            resizeMode="cover"
        />
      </View>

      <View style={styles.titleContainer}> 
        <Text style={styles.title}>Tigre</Text>
        <Text style={styles.title}>Azul</Text>
      </View>

      <TextBanner 
          items={items}
          speed={5}        
          height={80}           
          itemSpacing={50}        
      />

      <InicioMenu />
    </View>
  );
}

