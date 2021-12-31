import { StyleSheet } from "react-native";
import { lightGray } from "../../assets/styles/colors";
import { mediumText } from "../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 20
    },
    title: {
        fontFamily: mediumText,
        fontSize: 14,
        color: lightGray
    }
})

export default styles;