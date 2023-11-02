import { PropsWithChildren } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";



type ButtonProps = PropsWithChildren<{
    text: string;
    onChange: (text: string) => void;
}>;
  
function ActionButton({children, text, onChange}: ButtonProps): JSX.Element {
    return (      
        <TouchableOpacity onPress={() => onChange(text) }>
            <LinearGradient
                colors={['#72C3BD', '#2B8F89']}
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
        marginTop: 10,
        height: 50,
    },
    buttonGrad: {
        height: 50,
        borderRadius: 10,
        bottom: 5,
    },
});

export default ActionButton;