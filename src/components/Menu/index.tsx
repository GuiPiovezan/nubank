import React from 'react'
import { Animated } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

import { MaterialIcons } from '@expo/vector-icons'

import { data } from './data'
import {
  Code,
  Container,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles'

interface Props {
  translateY: Animated.Value
}

export const Menu: React.FC<Props> = ({ translateY }: Props) => {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode
          value="https://github.com/GuiPiovezan"
          size={90}
          color="#FFF"
          backgroundColor="#8B10AE"
        />
      </Code>

      <Nav>
        {data.map(item => (
          <NavItem key={item.id}>
            <MaterialIcons name={item.iconName} size={20} color="#fff" />
            <NavText>{item.text}</NavText>
          </NavItem>
        ))}
      </Nav>

      <SignOutButton onPress={() => undefined}>
        <SignOutButtonText>Sair do app</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}
