import {Image, StyleSheet, View, Text, Pressable} from 'react-native';

export function ItemCart(props: any) {
  return (
    <View style={styles.item}>
      <Image source={require('../img/but.png')}></Image>
      <Text>{props.title}</Text>
      <Text>{props.price}</Text>
      <Pressable style={styles.trash}>
        <Image source={require('../img/trash.png')}></Image>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    height: 90,
    width: 320,
    shadowOffset: {width: -20, height: -10},
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowColor: 'black',
   
  },
  trash: {
    backgroundColor: '#DC3545',
    width: 40,
    height: 40,
    position: 'absolute',
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
