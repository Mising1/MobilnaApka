import {Image, StyleSheet, View, Text, Pressable} from 'react-native';

export function ItemCart(props: any) {
  return (
    <View style={styles.item}>
      <Image source={props.image} style={{resizeMode:'contain', width: 100}}></Image>
      <Text>{props.title}</Text>
      <Text>{props.price}$</Text>
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
    shadowRadius: 30,
    shadowOpacity: 1,
    shadowColor: 'black',
    elevation: 10,
   
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
