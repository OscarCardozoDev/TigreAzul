import React from 'react';
import InicioMenuView from './InicioMenu.view';

export default function InicioMenu() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <InicioMenuView openIndex={openIndex} toggleDropdown={toggleDropdown}/>
    );
}