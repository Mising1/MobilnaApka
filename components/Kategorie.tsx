import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {categories} from '../dane/dane';
import React, {useState} from 'react';

export function Kategorie() {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
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
  );
}

const styles = StyleSheet.create({
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
