import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CATEGORIES, FAVORITES, HOME, PROFILE} from '../utils/routes';
import Categories from '../screens/Categories';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import {AppColors} from '../theme/colors';
import TabIcon from '../components/Router/TabIcon';
import {ShoppingCart} from 'iconsax-react-native';
import HeaderTabRight from '../components/Router/HeaderTabRight';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        headerRight: ({focused, color, size}) => <HeaderTabRight />,
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.GRAY,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={CATEGORIES} component={Categories} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
