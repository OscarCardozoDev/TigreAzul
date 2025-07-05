import React from 'react';
import useTextBanner from "./TextBanner.hook";
import TextBannerView from "./TextBanner.view";
import { TextBannerProps } from "./TextBanner.types";

export default function TextBanner({
    items,
    speed = 50,
    height = 80,
    itemSpacing = 40,
}: TextBannerProps) {
    
    const { activeItems } = useTextBanner(items, speed, itemSpacing);

    return (
        <TextBannerView 
            activeItems={activeItems}
            speed={speed}
            height={height}
            itemSpacing={itemSpacing}
        />
    );
}