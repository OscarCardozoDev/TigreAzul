import { useEffect, useState, useRef } from "react";
import { Dimensions } from "react-native";
import { TextBannerItem, ActiveItem } from "./TextBanner.types";

const { width: screenWidth } = Dimensions.get('window');

export default function useTextBanner(
    originalItems: TextBannerItem[], 
    speed: number = 50,
    itemSpacing: number = 40
) {
    const [activeItems, setActiveItems] = useState<ActiveItem[]>([]);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const itemIndexRef = useRef(0);
    const nextItemTimeRef = useRef(0);

    // Función para calcular el ancho estimado de un elemento
    const estimateItemWidth = (item: TextBannerItem): number => {
        // Imagen (50) + margen imagen (15) + texto estimado + padding (20) + spacing
        const textWidth = item.text.length * 12; // aproximación de 12px por carácter
        return 50 + 15 + textWidth + 20 + itemSpacing;
    };

    // Función para agregar un nuevo elemento
    const addNewItem = () => {
        if (originalItems.length === 0) return;

        const currentIndex = itemIndexRef.current % originalItems.length;
        const item = originalItems[currentIndex];
        const width = estimateItemWidth(item);

        const newItem: ActiveItem = {
            ...item,
            id: `${Date.now()}-${currentIndex}`,
            position: screenWidth, // empieza desde la derecha
            width
        };

        setActiveItems(prev => [...prev, newItem]);
        itemIndexRef.current++;
    };

    useEffect(() => {
        if (originalItems.length === 0) {
            setActiveItems([]);
            return;
        }

        // Limpiar intervalo anterior
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // Agregar el primer elemento inmediatamente
        addNewItem();

        intervalRef.current = setInterval(() => {
            setActiveItems(prevItems => {
                const updatedItems: ActiveItem[] = [];
                let shouldAddNew = false;

                prevItems.forEach(item => {
                    const newPosition = item.position - 1;

                    // Si el elemento no ha salido completamente de la pantalla, mantenerlo
                    if (newPosition + item.width > 0) {
                        updatedItems.push({
                            ...item,
                            position: newPosition
                        });
                    }
                });

                // Determinar si debemos agregar un nuevo elemento
                // Agregar cuando el último elemento esté suficientemente dentro de la pantalla
                const lastItem = prevItems[prevItems.length - 1];
                if (lastItem && lastItem.position <= screenWidth - lastItem.width - 100) {
                    // 100px de buffer para que no se vean muy juntos
                    shouldAddNew = true;
                }

                // Si no hay elementos activos, agregar uno
                if (updatedItems.length === 0) {
                    shouldAddNew = true;
                }

                return updatedItems;
            });

            // Agregar nuevo elemento si es necesario
            setActiveItems(prev => {
                const lastItem = prev[prev.length - 1];
                const shouldAdd = !lastItem || 
                    (lastItem.position <= screenWidth - lastItem.width - 100);

                if (shouldAdd) {
                    const currentIndex = itemIndexRef.current % originalItems.length;
                    const item = originalItems[currentIndex];
                    const width = estimateItemWidth(item);

                    const newItem: ActiveItem = {
                        ...item,
                        id: `${Date.now()}-${currentIndex}`,
                        position: screenWidth,
                        width
                    };

                    itemIndexRef.current++;
                    return [...prev, newItem];
                }

                return prev;
            });

        }, speed);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [originalItems, speed, itemSpacing]);

    // Resetear cuando cambian los items originales
    useEffect(() => {
        setActiveItems([]);
        itemIndexRef.current = 0;
        nextItemTimeRef.current = 0;
    }, [originalItems]);

    return { 
        activeItems,
        resetBanner: () => {
            setActiveItems([]);
            itemIndexRef.current = 0;
        }
    };
}