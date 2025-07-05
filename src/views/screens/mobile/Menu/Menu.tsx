import react from "react";
import { View, Image, Text } from "react-native";
import styles from "./Menu.styles";

import MenuCard from "@/views/components/MenuCard/MenuCard";
import backIcon from "@/assets/icons/whiteBack.png";

export default function Menu() {

  const 

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={backIcon} 
          style={styles.backIcon}
          resizeMode="contain"
        />
        <Text style={styles.title}>CARTA</Text>
      </View>

      <MenuCard />
    </View>
  );
}