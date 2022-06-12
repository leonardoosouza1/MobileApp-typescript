import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

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
        {/* <Stack.Screen name="Dashboard" component={}/>
        <Stack.Screen name="CreateArticle" component={} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { PrivateRoutes }
