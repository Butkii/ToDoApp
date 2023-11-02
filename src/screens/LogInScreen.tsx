
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputField from '../components/input/InputField';
import ActionButton from '../components/buttons/ActionButton';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../utils/RootStackParamList';
import LogInButton from '../components/buttons/LoginButton';
import SocialButton from '../components/buttons/SocialButton';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'LogIn'>;
};

function LogInScreen({navigation} : LoginScreenProps): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email} Password: ${password}`);
    return true;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo/Picture2.png')} />
      <InputField placeholder="Email" onChange={(text) => setEmail(text)} />
      <InputField placeholder="Password" onChange={(text) => setPassword(text)} secureTextEntry />
      <Pressable onPress={() => handleLogin() ? navigation.navigate('Main') : false}>
        <Text style={styles.title}>Log In</Text>
      </Pressable>
      <View style={styles.buttonGroup}>
        <LogInButton text="Sign Up" onChange={() => navigation.navigate('SignUp')}/>
        <View style={styles.socialButtonGroup}>
          <SocialButton platform='google'></SocialButton>
          <SocialButton platform='facebook'></SocialButton>
          <SocialButton platform='apple'></SocialButton>
        </View>
      </View>
    </View>
);
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#151f42',
      // alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
    },
    title: {
      fontSize: 60,
      fontWeight: 'bold',
      color: '#7d7b85',
      marginBottom: 60,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontFamily: 'sans-serif',
      marginTop: 30,
    },
    subtitle: {
      fontSize: 20,
      color: '#eee',
      marginBottom: 20,
      textAlign: 'left',
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 60,
      alignSelf: 'center',
    },
    textPassword: {
      color: '#eee',
      textAlign: 'right',
      marginBottom: 20,
    },
    textRegister: {
      color: '#eee',
      textAlign: 'center',
      marginTop: 40,
      marginBottom: 25,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      color: '#ffffff',
      backgroundColor: 'transparent',
      marginBottom:0,
      marginTop: 10,
      height: 50,
    },
    buttonGrad: {
      height: 50,
      borderRadius: 10,
      bottom: 5,
    },
    buttonGroup: {
      flexDirection: 'row',
      marginLeft: 0,
      width: '100%',
    },
    socialButtonGroup: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 30,
      width: 200,  
      marginRight: 20,
    }
  });

  export default LogInScreen;