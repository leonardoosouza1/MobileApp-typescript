import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

type PublicRoutesNavigatorProps = {
    Login: undefined;
    SignUp: undefined;
}

const PublicRoutes = () => {
  const Stack = createStackNavigator<PublicRoutesNavigatorProps>()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true
        }}
      >
        {/* <Stack.Screen name="Login" component={}/>
        <Stack.Screen name="SignUp" component={} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { PublicRoutes }
