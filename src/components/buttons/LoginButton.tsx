import { PropsWithChildren } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";



type ButtonProps = PropsWithChildren<{
    text: string;
    onChange: (text: string) => void;
}>;
  
function LogInButton({children, text, onChange}: ButtonProps): JSX.Element {
    return (      
        <TouchableOpacity onPress={() => onChange(text) }>
            <LinearGradient
                colors={['#bb7cbe', '#b06ab3']}
                style={styles.buttonGrad}>
                <Text style={styles.buttonText}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent',
        marginBottom:0,
        marginTop: 15,
        height: 50,
    },
    buttonGrad: {
        height: 60,
        bottom: 5,
        marginLeft: 0,
        marginTop: 20,
        borderTopRightRadius: 28,
        borderBottomRightRadius: 28,
        width: 150,
    },
});

export default LogInButton;