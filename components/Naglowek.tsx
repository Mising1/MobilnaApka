import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export function Naglowek() {
  return (
    <View style={style.naglowek}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={[style.tekst, {fontWeight: '400'}]}>Nasze</Text>
        <Text style={[style.tekst, {fontWeight: '800'}]}>Produkty</Text>
      </View>
      <TouchableOpacity
        style={style.search}
        onPress={() => console.log('click search')}>
        <Image source={require('../img/bx-search.png')} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  naglowek: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  search: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#F8F8F8',
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 2},
    shadowRadius: 3,
    elevation: 10,
  },

  tekst: {
    fontFamily: 'Inria Sans',
    fontSize: 24,
    color: '#000000',
  },
});
