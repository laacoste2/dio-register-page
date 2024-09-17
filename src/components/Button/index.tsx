import React from 'react'
import { ButtonContainer } from './styles';
import { IButtonStyled } from './types';

const Button = ({title, variant = "primary", onClick} : IButtonStyled) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>{title}</ButtonContainer>
  )
}

export { Button }
