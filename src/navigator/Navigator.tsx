import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import SwiftScreen from '../screens/SwiftScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import SectionListScreen from '../screens/SectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfinitiveScrollScreen from '../screens/InfinitiveScrollScreen';
import SlidesScreen from '../screens/SlidesScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';
const Stack = createStackNavigator();

const Navigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
        <Stack.Screen name="SwiftScreen" component={SwiftScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen
          name="PullToRefreshScreen"
          component={PullToRefreshScreen}
        />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
        <Stack.Screen
          name="InfinitiveScrollScreen"
          component={InfinitiveScrollScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
