import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ReadingFeelScreen from './src/screens/ReadingFeelScreen';
import AccessibilityScreen from './src/screens/AccessibilityScreen';
import RewardsScreen from './src/screens/RewardsScreen';
import HelpScreen from './src/screens/HelpScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Streaks' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name="ReadingFeel"
          component={ReadingFeelScreen}
          options={{ title: 'Reading Feel' }}
        />
        <Stack.Screen
          name="Accessibility"
          component={AccessibilityScreen}
          options={{ title: 'Accessibility' }}
        />
        <Stack.Screen
          name="Rewards"
          component={RewardsScreen}
          options={{ title: 'Rewards' }}
        />
        <Stack.Screen
          name="Help"
          component={HelpScreen}
          options={{ title: 'Help' }}
        />
        <Stack.Screen
          name="Feedback"
          component={FeedbackScreen}
          options={{ title: 'What happened?' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
