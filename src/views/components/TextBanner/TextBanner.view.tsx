import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './TextBanner.styles';
import { ActiveItem, TextBannerViewProps } from './TextBanner.types';

export default function TextBannerView({
    activeItems,
    height = 80,
    itemSpacing = 40,
}: TextBannerViewProps) {
    
    // Si no hay elementos activos, mostrar banner vacío
    if (!activeItems || activeItems.length === 0) {
        return (
            <View style={[
                styles.container,
                { height }
            ]}>
                {/* Banner vacío esperando elementos */}
            </View>
        );
    }

    return (
        <View style={[
            styles.container,
            { height }
        ]}>
            {/* Renderizar cada elemento activo en su posición actual */}
            {activeItems.map((item) => (
                <View 
                    key={item.id}
                    style={[
                        styles.movingContainer,
                        { left: item.position }
                    ]}
                >
                    <View style={[
                        styles.itemContainer,
                        { marginRight: itemSpacing }
                    ]}>
                        <Image 
                            source={ item.image } 
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Text style={[
                            styles.text
                        ]}>
                            {item.text}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
}