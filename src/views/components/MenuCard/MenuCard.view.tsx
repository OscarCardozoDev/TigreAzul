import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { MenuCardProps } from "./MenuCard.types";
import styles from "./MenuCard.styles";
import Button from "../shared/Button/Button";

import cardBg from "@/assets/images/backgrounds/cardBg.png";

export default function MenuCardView({ 
    title, 
    image, 
    price,
    sello,
}: MenuCardProps) {
    return (
        <ImageBackground 
            source={cardBg}
            style={styles.container}
            resizeMode="cover"
        >
            <Text style={styles.title}>{title}</Text>
            <View style={styles.textContainer}>
                <Image source={image} style={styles.image} resizeMode="cover" />

                <Text style={styles.price}>{price}</Text>
            </View>
            <Button title="¡Lo quiero!" onPress={() => alert("¡Lo quiero!")} />
            
            {sello && (
                <View style={[styles.sello, styles[sello.position]]}>
                    <Text style={styles.selloText}>{sello.text}</Text>
                </View>
            )}
        </ImageBackground>
    );
}