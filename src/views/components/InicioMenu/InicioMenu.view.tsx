import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './InicioMenu.styles';
import { InicioMenuViewProps } from './InicioMenu.types';

import { 
    SedeContent, 
    CartaContent, 
    LoyaltyContent,
    TigrelabContent,
    OpinaContent,
} from './dropdown.content';

import tigreAzul from '@/assets/images/tigreAzul.png';
import tigreRosa from '@/assets/images/tigreRosa.png';

export default function InicioMenuView({ openIndex, toggleDropdown }: InicioMenuViewProps) {
    const menuItems = [
        { title: 'SEDE', colorStyle: styles.color_1, index: 0, content: <SedeContent /> },
        { title: 'CARTA', colorStyle: styles.color_2, index: 1,content: <CartaContent /> },
        { title: 'TIGRELAB', colorStyle: styles.color_3, index: 2, content: <TigrelabContent /> },
        { title: 'LOYALTY', colorStyle: styles.color_2, index: 3, content: <LoyaltyContent /> },
        { title: 'OPINA', colorStyle: styles.color_1, index: 4, content: <OpinaContent /> },
    ];

    const getItemStyle = (index: number) => {
        return {
            ...styles.itemContainer,
            maxHeight: openIndex === index ? 800 : 100,
        };
    };

    return (
        <View style={styles.inicioMenuContainer}>
            {menuItems.map((item) => (
                <View key={item.index} style={getItemStyle(item.index)}>
                    <TouchableOpacity onPress={() => toggleDropdown(item.index)}>
                        <Text style={[styles.itemTitle, item.colorStyle]}>{item.title}</Text>
                    </TouchableOpacity>

                    {openIndex === item.index && (
                        <View style={styles.dropdown}>
                            {item.content}
                        </View>
                    )}
                </View>
            ))}

            <View style={styles.whiteSpace}>
                <Image 
                    source={tigreAzul}
                    style={[styles.image, {right: '55%'}]}
                    resizeMode='cover'
                />
                <Image 
                    source={tigreRosa}
                    style={[styles.image, {left: '60%'}]}
                    resizeMode='contain'
                />
                <Text style={styles.textFooter}>© TIGRE AZUL</Text>
            </View>
        </View>
    );
}