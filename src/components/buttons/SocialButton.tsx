import { PropsWithChildren } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type SocialProps = PropsWithChildren<{
  platform: string;
}>;

function SocialButton({children, platform}: SocialProps): JSX.Element {
  return (
    <TouchableOpacity>
      <View style={styles.socialButton}>
        <Icon name="google" size={18} color="#6269D2" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    socialButton: {
      width: 40,
      height: 40,
      borderRadius: 30,
      backgroundColor: '#fcf7ea',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 15,
    },
});

export default SocialButton;