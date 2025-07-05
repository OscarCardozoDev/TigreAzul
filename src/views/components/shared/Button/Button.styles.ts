import { ImageBackground, StyleSheet } from 'react-native';
import { colors, fonts } from '@/assets/theme/global';
import { ButtonVariant, ButtonSize, ButtonStyles } from './Button.types';

const COLORS = {
  primary: colors.pink_primary,
  secondary: colors.pink_secondary,
  third: colors.blue,
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F2F2F7',
  gray300: '#C7C7CC',
  gray500: '#8E8E93',
  gray800: '#1C1C1E',
};

const baseStyles = StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: 44,
    overflow: 'hidden',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  fullWidth: {
    width: '100%',
  },
  iconSpacing: {
    marginHorizontal: 4,
  },
});

export const getButtonStyles = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'medium',
  disabled: boolean = false,
  fullWidth: boolean = false
): ButtonStyles => {
  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size);
  
  return {
    container: {
      ...baseStyles.container,
      ...variantStyles.container,
      ...sizeStyles.container,
      ...(disabled && baseStyles.disabled),
      ...(fullWidth && baseStyles.fullWidth),
    },
    text: {
      ...baseStyles.text,
      ...variantStyles.text,
      ...sizeStyles.text,
    },
    loadingContainer: baseStyles.loadingContainer,
  };
};

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return {
        container: {
            backgroundColor: 'transparent', 
        },
        text: {
          color: COLORS.white,
          fontFamily: fonts.pearlJean,
        },
      };
    case 'secondary':
      return {
        container: {
            backgroundColor: 'transparent', 
        },
        text: {
          color: COLORS.white,
          fontFamily: fonts.outfit,
        },
      };
    case 'outline':
      return {
        container: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: COLORS.primary,
        },
        text: {
          color: COLORS.primary,
          fontFamily: fonts.pearlJean,
        },
      };
    case 'ghost':
      return {
        container: {
          backgroundColor: 'transparent',
        },
        text: {
          color: COLORS.primary,
        },
      };
    default:
      return {
        container: {
          backgroundColor: COLORS.primary,
        },
        text: {
          color: COLORS.white,
        },
      };
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return {
        container: {
          paddingHorizontal: 12,
          paddingVertical: 8,
          minHeight: 36,
        },
        text: {
          fontSize: 14,
        },
      };
    case 'large':
      return {
        container: {
          paddingHorizontal: 25,
          paddingVertical: 18,
          minHeight: 52,
        },
        text: {
          fontSize: 18,
        },
      };
    case 'medium':
    default:
      return {
        container: {
          paddingHorizontal: 16,
          paddingVertical: 12,
          minHeight: 44,
        },
        text: {
          fontSize: 16,
        },
      };
  }
};