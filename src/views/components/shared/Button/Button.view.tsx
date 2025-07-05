import React from 'react';
import { 
  Pressable, 
  Text, 
  ActivityIndicator, 
  View,
  Animated,
  ImageBackground
} from 'react-native';
import { ButtonProps } from './Button.types';
import { getButtonStyles } from './Button.styles';
import { useButtonPress, useButtonAccessibility } from './Button.hooks';

export const ButtonView: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  fullWidth = false,
  backgroundImage,
  ...pressableProps
}) => {
  const styles = getButtonStyles(variant, size, disabled, fullWidth);
  const { handlePress, handlePressIn, handlePressOut, isPressed } = useButtonPress(
    onPress,
    loading,
    disabled
  );
  const accessibilityProps = useButtonAccessibility(title, loading, disabled);

  const animatedScale = new Animated.Value(1);

  const handlePressInAnimated = () => {
    handlePressIn();
    Animated.spring(animatedScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOutAnimated = () => {
    handlePressOut();
    Animated.spring(animatedScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator 
            size="small" 
            color="#FFFFFF"
          />
          <Text style={[styles.text, { marginLeft: 8 }, textStyle]}>
            {title}
          </Text>
        </View>
      );
    }

    return (
      <>
        {leftIcon && (
          <View style={{ marginRight: 8 }}>
            {leftIcon}
          </View>
        )}
        <Text style={[styles.text, textStyle]}>
          {title}
        </Text>
        {rightIcon && (
          <View style={{ marginLeft: 8 }}>
            {rightIcon}
          </View>
        )}
      </>
    );
  };

  const renderButton = () => {
    // Para el botón primary con imagen de fondo
    if ((variant === 'primary' || 'secondary') && backgroundImage) {
      return (
        <View style={styles.container}>
            <ImageBackground
            source={backgroundImage}
            style={{
                width: '100%',
                height: '100%',
                paddingHorizontal: 16,
                paddingVertical: 12,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            imageStyle={{ borderRadius: styles.container.borderRadius || 25 }}
            resizeMode="contain"
            >
                {renderContent()}
            </ImageBackground>
        </View>
      );
    }

    // Para todas las demás variantes (secondary, danger, outline, ghost)
    return (
      <View style={[styles.container, style]}>
        {renderContent()}
      </View>
    );
  };

  return (
    <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
      <Pressable
        onPress={handlePress}
        onPressIn={handlePressInAnimated}
        onPressOut={handlePressOutAnimated}
        disabled={disabled || loading}
        {...accessibilityProps}
        {...pressableProps}
      >
        {renderButton()}
      </Pressable>
    </Animated.View>
  );
};