import React from 'react'
import {BuscarInputContainer,Container,Input,Menu,MenuRight,Row,Wrapper}from './styles'
import Button from '../Button'


export default function Header() {
  return (
    <Wrapper>
      <Container>
      <Row>
          <img src='' alt="logo da dio" />
          <BuscarInputContainer>
            <Input placeholder='Buscar...'/>
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href=""></MenuRight>
          <Button title="Entrar"/>
          <Button title="Cadastrar"/>
        </Row>
      </Container>
    </Wrapper>
  )
}
