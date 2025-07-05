import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from '@/assets/theme/global';
import Inicio from './src/views/screens/mobile/Inicio/Inicio';
import Menu from './src/views/screens/mobile/Menu/Menu';

export default function App() {
  const [fontsLoaded] = useFonts({
    [fonts.pearlJean]: require('@/assets/fonts/PearlJean/PearlJean.ttf'),
    [fonts.outfit]: require('@/assets/fonts/Outfit/Outfit-VariableFont_wght.ttf'),
  });

  return (
    <View style={{ flex: 1 }}>
      <Menu />
    </View>
  );
}

