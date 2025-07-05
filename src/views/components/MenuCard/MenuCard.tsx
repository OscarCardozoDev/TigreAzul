import React from "react";
import MenuCardView from "./MenuCard.view";
import { MenuCardProps } from "./MenuCard.types";

export default function MenuCard({title, price, image, sello }: MenuCardProps) {
    return <MenuCardView 
        title={title} 
        price={price} 
        image={image}
        sello={sello}
    />;
};