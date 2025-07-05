export interface SelloProps {
    text: string;
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export interface MenuCardProps { 
    title: string;
    price: number;
    image: any;
    sello?: SelloProps;
}