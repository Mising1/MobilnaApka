import {StyleSheet, View, ScrollView} from 'react-native';
import {Menu} from '../components/Menu';
import {Fragment, useState} from 'react';
import {Naglowek} from '../components/Naglowek';
import {Kategorie} from '../components/Kategorie';
import {Footer} from '../components/Footer';
import {card} from '../dane/dane';
import {Card} from '../components/Card';


interface HomeScreenProps {
  navigation: any;
}

export function HomeScreen(props: HomeScreenProps) {
  const [item, setItem] = useState(card);
  return (
    <View style={styles.frame}>
      <View style={styles.cont}>
        <Menu nav={props.navigation} />
        <Naglowek />
        <Kategorie />

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
});
