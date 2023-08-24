import React from 'react'
import {ButtonContainer} from './style';

export default function Button({label, onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
        {label}
    </ButtonContainer>
  )
}
