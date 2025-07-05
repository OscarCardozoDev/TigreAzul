import { useState, useCallback } from 'react';

export const useButtonPress = (
  onPress: () => void,
  loading: boolean = false,
  disabled: boolean = false
) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = useCallback(() => {
    if (!loading && !disabled) {
      setIsPressed(true);
    }
  }, [loading, disabled]);

  const handlePressOut = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handlePress = useCallback(() => {
    if (!loading && !disabled) {
      onPress();
    }
  }, [onPress, loading, disabled]);

  return {
    isPressed,
    handlePressIn,
    handlePressOut,
    handlePress,
  };
};

export const useButtonAccessibility = (
  title: string,
  loading: boolean = false,
  disabled: boolean = false
) => {
  const accessibilityLabel = loading 
    ? `${title}, cargando` 
    : title;

  const accessibilityState = {
    busy: loading,
    disabled: disabled,
  };

  const accessibilityHint = loading 
    ? 'El botón está procesando, por favor espera'
    : disabled 
    ? 'Este botón está deshabilitado'
    : `Toca para ${title.toLowerCase()}`;

  return {
    accessibilityLabel,
    accessibilityState,
    accessibilityHint,
    accessibilityRole: 'button' as const,
  };
};