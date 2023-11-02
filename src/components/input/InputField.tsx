import { PropsWithChildren } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";



type InputProps = PropsWithChildren<{
    placeholder: string;
    onChange: (text: string) => void;
    secureTextEntry?: boolean;
}>;
  
function InputField({children, placeholder, onChange, secureTextEntry}: InputProps): JSX.Element {
  return (      
    <TextInput 
      style={styles.input} 
      placeholder={placeholder}
      placeholderTextColor='#fcf7ea'
      onChangeText={(text) => onChange(text)}
      secureTextEntry={secureTextEntry}
    >
    </TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 24,
    padding: 10,
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 40,
    backgroundColor: '#2a4b94',
    color: '#fcf7ea',
    textAlign: 'center',
    fontSize: 18,
  }
});

export default InputField;