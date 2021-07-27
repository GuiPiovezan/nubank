import React from 'react'

import logo from '@assets/images/Nubank_Logo.png'
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Logo, Title, Top } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Guilherme</Title>
      </Top>
      <MaterialIcons name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  )
}
