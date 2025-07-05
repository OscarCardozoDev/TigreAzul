import { ImageSourcePropType } from "react-native";

export interface TextBannerItem {
    text: string;
    image: ImageSourcePropType;
}

export interface TextBannerProps {
    items: TextBannerItem[];
    speed?: number; // velocidad del movimiento (menor = más rápido)
    height?: number; // altura del banner
    backgroundColor?: string;
    textColor?: string;
    itemSpacing?: number; // espaciado entre elementos
}

export interface ActiveItem extends TextBannerItem {
    id: string;
    position: number;
    width: number;
}

export interface TextBannerViewProps {
    activeItems: ActiveItem[];
    speed?: number;
    height?: number;
    backgroundColor?: string;
    textColor?: string;
    itemSpacing?: number;
}