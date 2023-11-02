import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import RootStackParamList from "../utils/RootStackParamList";
import { registerSensor } from "react-native-reanimated/lib/typescript/reanimated2/core";
import ActionButton from "../components/buttons/ActionButton";
import OutlinedButton from "../components/buttons/OutlinedButton";

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function HomeScreen({ navigation } : HomeScreenProps): JSX.Element {
  return (
    <View style={styles.background}>
        <Image style={styles.image} source={require('../../assets/logo/transparentlogo.png')} />
        <View style={styles.buttonGroup}>
            <OutlinedButton text="Sign In" onChange={() => navigation.navigate('LogIn')}/>
            <OutlinedButton text="Sign Up" onChange={() => navigation.navigate('SignUp')}/>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#151f42',
    },
    image: {
      height: 400,
      marginBottom: 20,
      alignSelf: 'center',
    },
    buttonGroup: {
        paddingHorizontal: 20,

    }
});

export default HomeScreen;

