import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen = (props: LoginScreenProps) => {
  const log = () => props.navigation.navigate('Home');
  const reg = () => props.navigation.navigate('Register');

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.cont}>
      <View style={styles.nav}>
        <Text style={{fontSize: 28, color: '#000', fontWeight: 'bold'}}>
          Login
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.tekst}>Email</Text>
        <TextInput
          value={email}
          style={styles.input}
          onChangeText={text => setEmail(text)}
          placeholder="Wpisz swój email"></TextInput>
        <Text style={styles.tekst}>Password</Text>
        <TextInput
          value={pass}
          onChangeText={text => setPass(text)}
          style={styles.input}
          placeholder="Wpisz swoje hasło"
          secureTextEntry={true}></TextInput>
      </View>
      <Pressable onPress={log} style={styles.but}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 24,
            width: 150,
          }}>
          Zaloguj
        </Text>
      </Pressable>
      <Pressable onPress={reg} style={styles.but}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 24,
            width: 180,
          }}>
          Stwórz konto
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  nav: {
    marginTop: 80,
    width: 320,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: 320,
    marginTop: 20,
  },
  tekst: {
    marginTop: 30,
    fontSize: 20,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  but: {
    backgroundColor: '#F64141',

    height: 50,
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: 40,
  },
});
