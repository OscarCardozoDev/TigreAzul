import { StyleSheet } from "react-native";
import { colors, fonts } from "@/assets/theme/global";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.pink_secondary,
    },
    headerContainer: {
        width: "100%",
        paddingVertical: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    backIcon: {
        width: 50,
        height: 50,
        marginRight: 30,
    },
    title: {
        fontSize: 75,
        color: "#fff",
        fontFamily: fonts.pearlJean,
    },
});