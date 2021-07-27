import React from 'react'
import { Animated } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { data } from './data'
import { Container, TabItem, TabsContainer, TabText } from './styles'

interface Props {
  translateY: Animated.Value
}

export const Tabs: React.FC<Props> = ({ translateY }: Props) => {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}
    >
      <TabsContainer showsHorizontalScrollIndicator={false}>
        {data.map(item => (
          <TabItem key={item.id}>
            <MaterialIcons name={item.iconName} size={24} color="#FFF" />
            <TabText>{item.text}</TabText>
          </TabItem>
        ))}
      </TabsContainer>
    </Container>
  )
}
