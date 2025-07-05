import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { colors, fonts } from "@/assets/theme/global";
import Button from '@/views/components/shared/Button/Button';


import menuSedeBg from '@/assets/images/backgrounds/menuSede.webp';
import infoSedeBg from '@/assets/images/backgrounds/infoSedeBg.png';
import btnBg from '@/assets/images/backgrounds/buttonBg.png';
import opinaBanner from '@/assets/images/opinaBanner.png';
import tigreNegroCarta from '@/assets/images/tigreNegro/tigreNegro1.png';
import tigreNegroLoyalty from '@/assets/images/tigreNegro/tigreNegro2.png';
import tigreNegroOpina from '@/assets/images/tigreNegro/tigreNegro3.png';
import logo from '@/assets/icons/logo-black.png';

export const SedeContent = () => (
    <ImageBackground 
        source={menuSedeBg} 
        style={sedeStyle.sedeContainer}
        resizeMode="cover"
    >
        <View style={[sedeStyle.bgContainer, {alignSelf: 'flex-end'}]}>
            <ImageBackground 
                source={infoSedeBg} 
                style={sedeStyle.imgBg}
                resizeMode="cover"
            >
                <Text style={sedeStyle.title}>Horario</Text>

                <View style={sedeStyle.infoContainer}>
                    <Text style={sedeStyle.p}>Lunes a Viernes</Text>
                    <Text style={sedeStyle.p}>11am - 8pm</Text>
                    <Text style={sedeStyle.p}>Sábado a Domingo</Text>
                    <Text style={sedeStyle.p}>2:30pm - 8pm</Text>
                </View>
            </ImageBackground>
        </View>


        <View style={[sedeStyle.bgContainer, {position: 'absolute', bottom: 0}]}>
            <ImageBackground 
                source={infoSedeBg} 
                style={sedeStyle.imgBg}
                resizeMode="cover"
            >
                <Text style={sedeStyle.title}>Dirección</Text>

                <View style={sedeStyle.infoContainer}>
                    <Text style={sedeStyle.p}>Carrera 1G</Text>
                    <Text style={sedeStyle.p}>#46A - 21</Text>
                </View>
            </ImageBackground>
        </View>
    </ImageBackground>
);

export const CartaContent = () => (
    <View style={cartaStyle.cartaContainer}>
            <Image
                source={tigreNegroCarta} 
                style={cartaStyle.imgBg}
                resizeMode="contain"
            />
            <Button 
                title="Ver Menú"
                variant="secondary"
                size='large'
                backgroundImage={btnBg} 
                onPress={() => console.log('Guardar Carta')}
            />
    </View>
);

export const TigrelabContent = () => (
    <View style={labStyle.labContainer}>

            <View style={labStyle.titleContainer}>
                <Text style={labStyle.title1}>Crea tú</Text>
                <View style={labStyle.textWithLogoContainer}>
                    <Text style={labStyle.title2}>
                        Bebida
                    </Text>
                    <View style={labStyle.logoContainer}>
                        <Image
                            source={logo} 
                            style={labStyle.imgLogo}
                            resizeMode="contain"
                        />
                    </View>    
                </View>
            </View>
            
            <Text style={labStyle.description}>
            ¡Bienvenid@ a TIGRE LAB! 
            Aquí tú eres la mente maestra detrás de la receta perfecta. 
            Porque nadie conoce tus antojos mejor que tú... y nadie lo hace mejor que tú.
            </Text>
            <Button 
                title="EMPEZAR"
                variant="primary"
                size='large'
                backgroundImage={btnBg} 
                onPress={() => console.log('Guardar Carta')}
            />
    </View>
);

export const LoyaltyContent = () => (
    <View style={[cartaStyle.cartaContainer, {backgroundColor: colors.pink_primary}]}>
            <Image
                source={tigreNegroLoyalty} 
                style={cartaStyle.imgBg}
                resizeMode="contain"
            />
            <Button 
                title="Loyalty Card"
                variant="secondary"
                size='large'
                backgroundImage={btnBg} 
                onPress={() => console.log('Guardar Carta')}
            />
    </View>
);

export const OpinaContent = () => (
    <View style={opinaStyle.opinaContainer}>
            <Image
                source={opinaBanner} 
                style={opinaStyle.imgBg}
                resizeMode="contain"
            />
            <Image
                source={tigreNegroOpina} 
                style={opinaStyle.imgBg}
                resizeMode="contain"
            />
    </View>
);

const sedeStyle = StyleSheet.create({
    sedeContainer: {
        position: 'relative',
        height: '100%',
        width: '100%',
    },
    bgContainer: {
        width: '45%',
        margin: 20,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgBg: {
        width: '110%',
        height: '110%',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: fonts.pearlJean,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },
    infoContainer: {
        alignItems: 'center',
    },
    p: {
        fontFamily: fonts.outfit,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    }
});

const cartaStyle = StyleSheet.create({
    cartaContainer: {
        backgroundColor: colors.blue,
        position: 'relative',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgBg: {
        width: '80%',
        height: '80%',
        position: 'absolute',
    },
});

const labStyle = StyleSheet.create({
    labContainer: {
        backgroundColor: colors.blue,
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        position: 'relative',
        alignItems: 'center'
    },
    titleContainer: {
        maxWidth: 250,
        alignContent: 'center',
        position: 'relative',
    },
    title1: {
        fontFamily: fonts.outfit,
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
    },
    textWithLogoContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title2: {
        color: 'white',
        fontFamily: fonts.pearlJean,
        fontSize: 55,
        textAlign: 'center',
    },
    description: {
        color: 'white',
        maxWidth: 500,
        fontFamily: fonts.outfit,
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 30,
        paddingHorizontal: 60,
    },
    logoContainer: {
        backgroundColor: colors.blue_secondary,
        width: 50,
        height: 50,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 25, // Para círculo perfecto usa width/2
        position: 'absolute',
        top: -30, // Negativo para subir
        right: -25, // Ajusta según necesites
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10, // Para que esté encima
    },
    imgLogo: {
        width: 40,
        height: 40,
    },
});

const opinaStyle = StyleSheet.create({
    opinaContainer: {
        backgroundColor: colors.pink_primary,
        position: 'relative',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgBg: {
        width: '80%',
        height: '80%',
        position: 'absolute',
    },
});