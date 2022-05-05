import React from 'react'
import { Ionicons, Entypo } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Menu from '~/screens/Menu'
import Orders from '~/screens/Orders'
import Settings from '~/screens/Settings'
import Main from '~/screens/Main'

const Tab = createBottomTabNavigator()

const AppRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Main"
    tabBarOptions={{
      activeTintColor: '#2D9CDB',
    }}
  >
    <Tab.Screen
      name="Main"
      component={Main}
      options={{
        title: 'Map',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Ionicons name="map" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Menu"
      component={Menu}
      options={{
        title: 'Menu',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Ionicons name="fast-food" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Ordered"
      component={Orders}
      options={{
        title: 'Ordered',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Entypo name="list" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        title: 'Settings',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Ionicons name="settings-sharp" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default AppRoutes
