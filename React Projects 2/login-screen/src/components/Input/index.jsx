import React from 'react'

import {IconContainer, InputText, InputContainer} from './style'

export function Input({leftIcon, name, ...rest}) {
  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) :null}
        <InputText {...rest}/>
    </InputContainer>
  )
}
