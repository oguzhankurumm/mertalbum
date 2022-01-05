import { StyleSheet } from "react-native";
import {  ultraDark } from "../../assets/styles/colors";
import { boldText } from "../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    title: {
        fontFamily: boldText,
        fontSize: 28,
        color: ultraDark
    }
})

export default styles;