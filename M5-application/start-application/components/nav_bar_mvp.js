import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Feed from './screens/Feed';
import Workout from './screens/Workout';
import Account from './screens/Account';
import Search from './screens/Search';
import styles from './styles/AppStyles';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => (
          {
          headerStyle: {
            backgroundColor: 'black', // Customize background color
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove bottom border
          },
          headerTitle: () => null,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Workout') {
              iconName = focused ? 'barbell' : 'barbell-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }
            // Use the styles for the icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: 'white', // Set the active tint color for the tab bar
          tabBarInactiveTintColor: 'indigo'
        })}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Workout" component={Workout} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
