import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './screens/HomeScreen';
import {CartScreen} from './screens/CartScreen';
import {horizontalAnimation} from './animation/horizontalAnimation';
import {LoginScreen} from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { ProductScreen } from './screens/ProductScreen';

const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Screen name="Home" component={HomeScreen}></Screen>
        <Screen
          options={horizontalAnimation}
          name="Cart"
          component={CartScreen}></Screen>
        <Screen name="Login" component={LoginScreen}></Screen>
        <Screen name="Register" component={RegisterScreen}></Screen>
        <Screen name="Product" component={ProductScreen}></Screen>

      </Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
