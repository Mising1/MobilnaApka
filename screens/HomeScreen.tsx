import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Menu} from '../components/Menu';
import {Fragment, useState, useEffect} from 'react';
import {Naglowek} from '../components/Naglowek';

import {Footer} from '../components/Footer';
import {card, categories} from '../dane/dane';
import {Card} from '../components/Card';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


interface HomeScreenProps {
  navigation: any;
}



export function HomeScreen(props: HomeScreenProps) {
  
  const [item, setItem] = useState(card);
  const [activeCategory, setActiveCategory] = useState(1);

  

  return (
    <View style={styles.frame}>
      <View style={styles.cont}>
        <Menu nav={props.navigation} />
        <Naglowek />

        {/* Kategorie */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item => item.title}
          style={styles.kategorie}
          renderItem={({item}) => {
            let isActive = item.id == activeCategory;
            return (
              <TouchableOpacity
                style={[
                  isActive ? styles.button_active : styles.button_disabled,
                  styles.but,
                ]}
                onPress={() => setActiveCategory(item.id)}>
                <Text
                  style={[
                    isActive ? styles.text_active : styles.text_disabled,
                    styles.text,
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* BOX */}
        <ScrollView>
          <View style={styles.box}>
            {item.map(e => {
              return (
                <Fragment key={e.id}>
                  <Card
                    id={e.id}
                    title={e.title}
                    price={e.price}
                    image={e.image}
                    nav={props.navigation}
                  />
                </Fragment>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
}

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
  box: {
    flex: 1,
    flexWrap: 'wrap',
    rowGap: 30,
    flexDirection: 'row',
    paddingBottom: 25,
  },
  kategorie: {
    marginTop: 10,
    height: 40,
  },
  button_active: {
    backgroundColor: '#F64141',
    shadowColor: '#F64141',
  },
  button_disabled: {
    backgroundColor: '#F4F4F4',
    shadowColor: '#F4F4F4',
  },
  but: {
    marginLeft: 20,
    borderRadius: 24,
    paddingHorizontal: 10,
    height: 20,
    justifyContent: 'center',
    shadowOffset: {width: -2, height: 4},
    shadowRadius: 10,
    shadowOpacity: 0.2,
    elevation: 10,
  },
  text_active: {
    color: '#FFFFFF',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
  text_disabled: {
    color: '#868686',
  },
});
