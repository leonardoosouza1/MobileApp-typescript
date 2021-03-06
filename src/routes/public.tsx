import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { GoBackArrow, Typography } from '../components/UI'
import { SignUp, SignIn } from '../screens'

type PublicRoutesNavigatorProps = {
    SignIn: undefined;
    SignUp: undefined;
}

const PublicRoutes = () => {
  const Stack = createStackNavigator<PublicRoutesNavigatorProps>()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SignIn'
        screenOptions={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => (
              <GoBackArrow
                onPress={() => navigation.goBack()}
              />
            ),
            headerTitle: () => (
              <Typography>
                Sign Up
              </Typography>
            ),
            headerTitleAlign: 'center'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { PublicRoutes }
