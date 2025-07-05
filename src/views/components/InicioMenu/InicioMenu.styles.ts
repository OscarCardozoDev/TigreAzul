import { StyleSheet } from "react-native";
import { colors, fonts } from "@/assets/theme/global";

export default StyleSheet.create({
    inicioMenuContainer: {
        position: 'relative',
        width: '100%',
    },
    itemContainer: {
        maxHeight: 100,
        flex: 1,
        cursor: 'pointer',
    },
    itemTitle: {
        height: 100,
        paddingVertical: 20,
        fontFamily: fonts.pearlJean,
        fontSize: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropdown: {
        height: 400,
    },
    whiteSpace: {
        height: 500,
        position: 'relative',
        overflow: 'hidden',
    },
    image: {
        width: 300,
        height: 400,
        position: 'absolute',
        top: '10%',
    },
    textFooter: {
        position: 'absolute',
        bottom: 25,
        width: '100%',
        textAlign: 'center',
        fontFamily: fonts.pearlJean,
        fontSize: 20,
        color: colors.blue,
    },

    color_1: {
        backgroundColor: colors.blue,
        color: colors.pink_secondary,
    },
    color_2: {
        backgroundColor: colors.pink_secondary,
        color: colors.pink_primary,
    },
    color_3: {
        backgroundColor: colors.pink_primary,
        color: colors.blue
    },
});