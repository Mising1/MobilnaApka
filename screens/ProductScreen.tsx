import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

export function ProductScreen({route, navigation}: any) {
  const zdj = route.params.image;
  return (
    <View style={styles.frame}>
      <View style={styles.cont}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Home')}>
          <Image source={require('../img/back.png')}></Image>
        </TouchableOpacity>
        <Image source={zdj} style={{width: null, flex: 1, height:null,resizeMode:'contain'}}></Image>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>
            {route.params.title}
          </Text>
        <View style={styles.textCont}>
          <Pressable
            style={{
              backgroundColor: '#ff00bf',
              borderRadius: 25,
              paddingHorizontal: 10,
              paddingVertical: 5,
              alignItems: 'center',
              flexDirection: 'row',
              columnGap: 6,
            }}>
            <Image source={require('../img/hearth.png')}></Image>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: '#4eff26',
              borderRadius: 25,
              paddingHorizontal: 10,
              paddingVertical: 5,
              alignItems: 'center',
              flexDirection: 'row',
              columnGap: 6,
            }}>
            <Image source={require('../img/bookmark.png')}></Image>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#F64141',
              borderRadius: 25,
              paddingHorizontal: 10,
              paddingVertical: 5,
              alignItems: 'center',
              flexDirection: 'row',
              columnGap: 6,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff'}}>
              {route.params.price}$
            </Text>
            <Image source={require('../img/bx-cart.png')}></Image>
          </Pressable>
        </View>
        <View style={styles.descCont}>
          <Text style={{fontSize: 18, color: '#fff'}}>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consectetur maxime ex, nisi dignissimos architecto recusandae,
            obcaecati, numquam non excepturi aliquam autem voluptas ducimus a
            earum eveniet asperiores labore exercitationem consequatur.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 25,
  },
  textCont: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
  descCont: {
    backgroundColor: '#F64141',
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
  },
});
