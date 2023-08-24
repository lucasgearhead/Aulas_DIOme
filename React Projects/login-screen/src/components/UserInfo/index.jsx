import React from 'react'

import {Container,NameText,Progress,UserPicture} from "./style"

export default function UserInfo(nome, image, percentual) {
  return (
    <Container>
        <UserPicture src={image}/>
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}
