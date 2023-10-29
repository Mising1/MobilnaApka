import {Fragment} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

interface CardProps {
  id: number;
  title: string;
  price: number;
  image: any;
  nav: any;
}

export function Card(props: CardProps) {
  const product = () =>
    props.nav.navigate('Product', {
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.image
    });
  

  const zdj = props.image;


  return (
    <Pressable style={styles.card} onPress={product}>
      <View style={styles.banner}></View>
      <Image style={styles.image} source={zdj}></Image>
      <Text style={styles.name}>{props.title}</Text>
      <Pressable style={styles.price} onPress={() => console.log(props.price)}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
          {props.price}$
        </Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    width: 130,
    height: 192,
    borderColor: '#D7D7D7',
    borderStyle: 'solid',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#B8B8B8',
    shadowOffset: {width: 20, height: -10},
    elevation: 10,
    shadowRadius: 3,
  },
  banner: {
    width: 104,
    height: 96,
    backgroundColor: '#F64141',
    shadowColor: '#F64141',
    shadowOffset: {width: -1, height: -10},
    elevation: 15,
    position: 'absolute',
    shadowOpacity: 2,
    shadowRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 80,
  },
  price: {
    backgroundColor: '#F64141',
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  image: {
    marginLeft: 5,
    width: '100%',
    height: '50%',
    marginTop: 10,
    transform: [
      {
        rotate: '40deg',
      },
    ],
  },
  name: {
    alignSelf: 'flex-start',
    fontSize: 24,
    marginLeft: 2,
    color: '#1d2124',
    marginTop: 5,
  },
});
