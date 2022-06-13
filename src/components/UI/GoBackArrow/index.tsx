import React from 'react'
import { Pressable } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Text } from 'react-native'
const GoBackArrow = ({ color = 'black', onPress } : { color?: string, onPress?: () => void }) => (
  <Pressable
    onPress={onPress}
  >
    <Text>
        <Ionicons
          name='chevron-back'
          color={color}
          size={30}
        />
    </Text>
  </Pressable>
)

export { GoBackArrow }
