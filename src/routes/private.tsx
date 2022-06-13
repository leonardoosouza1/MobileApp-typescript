import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Alert } from 'react-native'
import { CreteArticle, Dashboard, ViewArticle } from '../screens'
import { GoBackArrow, Typography, Button, View, CreateArticle } from '../components/UI'
import { useAuth } from '../hooks/useAuth'

type PublicRoutesNavigatorProps = {
    Dashboard: undefined;
    CreateArticle: undefined;
}

const PrivateRoutes = () => {
  const { logout } = useAuth()
  const Stack = createStackNavigator<PublicRoutesNavigatorProps>()
  const handleLogout = () => {
    Alert.alert('You are sure?', '', [
      {
        text: 'Cancel'
      },
      {
        text: 'OK',
        onPress: async () => await logout()
      }
    ])
  }
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
          options={() => ({
            headerShown: true,
            headerLeft: () => (
              <View marginLeft={2}>
                <Button onPress={() => handleLogout()}>
                Logout
                </Button>
              </View>
            ),
            headerRight: () => (
             < CreateArticle/>
            ),
            headerTitleStyle: {
              display: 'none'
            },
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
         <Stack.Screen
          name="ViewArticle"
          component={ViewArticle}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => (
              <GoBackArrow
                onPress={() => navigation.goBack()}
              />
            ),
            headerTitle: () => (
              <Typography>
                Article
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
