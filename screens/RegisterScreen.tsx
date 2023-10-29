import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface RegisterProps {
  navigation: any;
}

export const RegisterScreen = (props: RegisterProps) => {
  const log = () => props.navigation.navigate('Login');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confPass, setConfPass] = useState('');

  const validate = () => {
    if (email.indexOf('@') >= 0 && pass.length >= 8 && confPass == pass) {
      log();
      console.log(pass, confPass);
    }
  };

  return (
    <View style={styles.cont}>
      <View style={styles.nav}>
      <TouchableOpacity style={styles.back} onPress={log}>
            <Image source={require('../img/back.png')}></Image>
          </TouchableOpacity>
        <Text style={{fontSize: 28, color: '#000', fontWeight: 'bold'}}>
          Rejestracja
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
        <Text style={styles.tekst}>Confirm password</Text>
        <TextInput
          value={confPass}
          onChangeText={text => setConfPass(text)}
          style={styles.input}
          placeholder="Wpisz swoje hasło"
          secureTextEntry={true}></TextInput>
      </View>
      <Pressable onPress={validate} style={styles.but}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 24}}>
          Zarejestruj
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
    marginTop: 60,
    width: 320,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    width: 25,
    alignSelf: 'flex-start',
  },
  form: {
    width: 320,
    marginTop: 10,
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
    width: 150,
    height: 50,
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: 40,
  },
});
