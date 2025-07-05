import React from 'react';
import { ButtonView } from './Button.view';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonView {...props} />;
};

export default Button;

// Re-exportar tipos para facilitar su uso
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';