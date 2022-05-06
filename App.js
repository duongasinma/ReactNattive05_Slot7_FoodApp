import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import HomeScreen from './screen/home/HomeScreen';
import TabLikeScreen from './screen/tab_like/TabLikeScreen';
import TabSearchScreen from './screen/tab_search/TabSearchScreen';
import TabUserScreen from './screen/tab_user/TabUserScreen';
import DetailScreen from './screen/home/homestack/DetailScreen';
import MapScreen from './screen/home/homestack/MapScreen';
import { ICONS, IMAGES } from "./assets/Images"

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default class App extends Component {
  HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen options={{headerShown: false}} name="home" component={HomeScreen} />
        <HomeStack.Screen options={{headerShown: false}} name="detail" component={DetailScreen} />
      </HomeStack.Navigator>
    );
  };
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'tab_home') {
                iconName = focused
                  ? ICONS.cutlery
                  : ICONS.cutlery;
              } 
              else if (route.name === 'tab_like') {
                iconName = ICONS.like ;
              } 
              else if (route.name === 'tab_search') {
                iconName = ICONS.search ;
              }
              else if (route.name === 'tab_user') {
                iconName = ICONS.user ;
              }

              return (
                <Image style={{width: 20, height: 20}} source = {iconName}/>
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: false
          }}>
          <Tab.Screen
            options={{headerShown: false}}
            name="tab_home"
            component={this.HomeStackScreen}
          />
          <Tab.Screen name="tab_like" component={TabLikeScreen} />
          <Tab.Screen name="tab_search" component={TabSearchScreen} />
          <Tab.Screen name="tab_user" component={TabUserScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
