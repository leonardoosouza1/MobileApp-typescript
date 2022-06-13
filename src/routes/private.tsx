import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { CreteArticle, Dashboard } from '../screens'
import { GoBackArrow, Typography, Button, View } from '../components/UI'

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
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={({ navigation }) => ({
            headerShown: true,
            headerRight: () => (
              <View marginRight={2}>
                <Button onPress={() => navigation.navigate('CreateArticle')}>
                Create Article
                </Button>
              </View>
            ),
            headerTitle: () => (
              <Typography>
                Dashboard
              </Typography>
            ),
            headerTitleAlign: 'center'
          })}
        />
        <Stack.Screen
          name="CreateArticle"
          component={CreteArticle}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => (
              <GoBackArrow
                onPress={() => navigation.goBack()}
              />
            ),
            headerTitle: () => (
              <Typography>
                Create Article
              </Typography>
            ),
            headerTitleAlign: 'center'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { PrivateRoutes }
