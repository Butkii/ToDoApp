import { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

type ButtonProps = PropsWithChildren<{
  text: string;
  onChange: (text: string) => void;
}>;

function OutlinedButton({ children, text, onChange }: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onChange(text)}>
      <LinearGradient colors={['#4568dc', '#b06ab3']}
                      style={{borderRadius: 8, padding: 2}}>
        <View style={styles.circleGradient}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleGradient: {
    margin: 1,
    backgroundColor: "#151f42",
    borderRadius: 8
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginTop: 5,
    height: 35,
  },
  button: {
    margin: 10,
  }
});

export default OutlinedButton;
