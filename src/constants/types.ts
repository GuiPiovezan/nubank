import { ComponentProps } from 'react'

import { MaterialIcons } from '@expo/vector-icons'

export interface PropsIcons {
  id: string
  iconName: ComponentProps<typeof MaterialIcons>['name']
  text: string
}
