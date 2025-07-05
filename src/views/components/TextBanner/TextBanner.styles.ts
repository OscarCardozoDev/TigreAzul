import { StyleSheet } from 'react-native';
import { colors, fonts } from '@/assets/theme/global';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: colors.pink_primary, // color por defecto
        overflow: 'hidden',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
    },
    movingContainer: {
        position: 'absolute',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 40, // espaciado entre elementos
        paddingHorizontal: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
        borderWidth: 2,
        borderColor: colors.blue,
    },
    text: {
        color: colors.blue,
        fontSize: 18,
        fontFamily: fonts.outfit,
        flexWrap: 'nowrap',
        minWidth: 150, // ancho mínimo para el texto
    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.pink_primary,
    },
    emptyText: {
        color: colors.blue,
        fontSize: 16,
    },
});
