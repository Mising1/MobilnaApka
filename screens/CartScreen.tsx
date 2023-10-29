import React, {Fragment, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {itemsCart} from '../dane/dane';
import {ItemCart} from '../components/ItemCart';

interface CartScreenProps {
  navigation: any;
}

export const CartScreen = ({route, navigation} :any) => {
  
  
  
  
  const home = () => navigation.navigate('Home');
  const [shop, setShop] = useState(itemsCart);

  return (
    <View style={styles.frame}>
      <View style={styles.cont}>
        {/* Header */}
        <View style={styles.main}>
          <TouchableOpacity style={styles.back} onPress={home}>
            <Image source={require('../img/back.png')}></Image>
          </TouchableOpacity>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 36,
              fontWeight: '500',
              color: '#000000',
            }}>
            Koszyk
          </Text>
        </View>
        {/* Items */}
        <ScrollView>
          <View style={styles.shopCart}>
            {shop.map(e => {
              return (
                <Fragment key={e.id}>
                  <ItemCart image={e.image} title={e.title} price={e.price} />
                </Fragment>
              );
            })}
          </View>
        </ScrollView>

        {/* Footer */}
      </View>
      <View style={styles.footer}>
        <Text style={styles.cost}>
          Total cost: {itemsCart.reduce((prev, curr) => prev + curr.price, 0)}
        </Text>
        <TouchableOpacity style={styles.zamow}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '700'}}>
            Zamów
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: '100%',
    height: 812,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  cont: {
    width: 320,
    height: 730,
    backgroundColor: '#ffffff',
    paddingBottom: 25,
  },
  main: {
    height: 120,
  },
  shopCart: {
    rowGap: 30,
  },
  footer: {
    bottom: 0,
    position: 'absolute',
    height: 75,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 100,
    flexDirection: 'row',
  },
  zamow: {
    width: 100,
    height: 50,
    borderRadius: 74,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F64141',
  },
  back: {
    width: 25,
  },
  cost: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
});
