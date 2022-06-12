import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { CreteArticle, Dashboard } from '../screens'

type PublicRoutesNavigatorProps = {
    Dashboard: undefined;
    CreateArticle: undefined;
}

const PrivateRoutes = () => {
  const Stack = createStackNavigator<PublicRoutesNavigatorProps>()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Dashboard'
        screenOptions={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true
        }}
      >
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="CreateArticle" component={CreteArticle} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { PrivateRoutes }
