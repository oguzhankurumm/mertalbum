import { StyleSheet } from "react-native";
import { ultraDark, red, white } from '../../assets/styles/colors';
import { bold } from '../../assets/styles/fonts';

const styles = StyleSheet.create({
    shadow: {
        shadowColor: red,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    bottomText: {
        fontFamily: bold,
        fontSize: 12
    }
})

export default styles;