import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

export function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Image source={require('../img/bookmark.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../img/hearth.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../img/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../img/pack.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../img/user.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    backgroundColor: '#F64141',
    height: 55,
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    flex: 1,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 35,
  },
});
