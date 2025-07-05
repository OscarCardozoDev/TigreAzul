import { StyleSheet } from "react-native";
import { colors, fonts } from '@/assets/theme/global';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        overflow: "scroll",
    },
    imageContainer: {
        backgroundColor: colors.pink_primary,
        width: "100%",
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 75,
        height: 75,
    },
    titleContainer: {
        backgroundColor: colors.pink_secondary,
        width: "100%",
        paddingVertical: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: colors.blue,
        fontFamily: fonts.pearlJean,
        fontSize: 75,
    }
});