import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {itemsCart} from '../dane/dane';

export function Menu(props: any) {
  const cart = () => props.nav.navigate('Cart');
  const logout = () => props.nav.navigate('Login');

  return (
    <View style={style.nav}>
      <TouchableOpacity onPress={logout}>
        <Image style={style.img} source={require('../img/logout.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={cart}>
        <Image style={style.img} source={require('../img/bx-cart.png')} />
        <Text style={style.notifi}>{itemsCart.length}</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  nav: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  img: {
    marginLeft: 20,
    marginRight: 20,
  },
  notifi: {
    position: 'absolute',
    right: 10,
    top: -5,
    width: 20,
    height: 20,
    backgroundColor: '#F64141',
    color: '#fff',
    borderRadius: 50,
    textAlign: 'center',
  },
});
