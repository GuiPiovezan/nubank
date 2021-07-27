import React from 'react'
import { Animated } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler'

import { Header } from '@components/Header'
import { Menu } from '@components/Menu'
import { Tabs } from '@components/Tabs'
import { MaterialIcons } from '@expo/vector-icons'

import {
  Anotation,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Container,
  Content,
  Description,
  Title,
} from './styles'

const HomeScreen: React.FC = () => {
  let offset = 0

  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  )

  const onHandlerStateChange = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent

      offset += translationY

      if (translationY >= 100) {
        opened = true
      } else {
        translateY.setValue(offset)
        translateY.setOffset(offset)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <CardHeader>
              <MaterialIcons name="attach-money" size={28} color="#666" />
              <MaterialIcons name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 7.197.611,65</Description>
            </CardContent>
            <CardFooter>
              <Anotation>Transferência de R$20,00 recebido via PIX</Anotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  )
}

export default HomeScreen
