import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import NavBar from './components/nav_bar_mvp';

export default function App() {
  return (
    NavBar()
  );
}
